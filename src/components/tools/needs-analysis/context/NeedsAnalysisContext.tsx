'use client';

import type { ContextData, NeedsAnalysisState, RecommendedModule, RecommendedService, StepType } from './types';
import React, { createContext, use, useEffect, useState } from 'react';
import {
  modules,
  serviceSolutions,
} from '@/data/needsAnalysisData';
import { logger } from '@/utils/logger';

type NeedsAnalysisContextType = {
  setStep: (step: StepType) => void;
  setContextData: (data: ContextData) => void;
  toggleSelection: (
    list: string[],
    item: string,
    setList: (l: string[]) => void,
    max?: number,
  ) => void;
  setSelectedPainPoints: (list: string[]) => void;
  setSelectedGoals: (list: string[]) => void;
  setSelectedHolisticIssues: (list: string[]) => void;
  setSelectedTimeline: (val: string) => void;
  setSelectedBudget: (val: string) => void;
  handleFinish: () => void;
  handleReset: () => void;
  getRecommendedModules: () => RecommendedModule[];
  getRecommendedServices: () => RecommendedService[];
} & NeedsAnalysisState;

const NeedsAnalysisContext = createContext<NeedsAnalysisContextType | undefined>(undefined);

export const NeedsAnalysisProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [step, setStep] = useState<StepType>('intro');
  const [selectedPainPoints, setSelectedPainPoints] = useState<string[]>([]);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [selectedHolisticIssues, setSelectedHolisticIssues] = useState<string[]>([]);
  const [selectedTimeline, setSelectedTimeline] = useState<string>('');
  const [selectedBudget, setSelectedBudget] = useState<string>('');

  const [contextData, setContextData] = useState<ContextData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    role: '',
    teamSize: '',
    industry: '',
    techStack: '',
  });

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('bizops_needs_analysis_state');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.step && parsed.step !== 'analyzing' && parsed.step !== 'result') {
          setStep(parsed.step);
        }
        if (parsed.contextData) {
          setContextData(parsed.contextData);
        }
        if (parsed.selectedPainPoints) {
          setSelectedPainPoints(parsed.selectedPainPoints);
        }
        if (parsed.selectedGoals) {
          setSelectedGoals(parsed.selectedGoals);
        }
        if (parsed.selectedHolisticIssues) {
          setSelectedHolisticIssues(parsed.selectedHolisticIssues);
        }
        if (parsed.selectedTimeline) {
          setSelectedTimeline(parsed.selectedTimeline);
        }
        if (parsed.selectedBudget) {
          setSelectedBudget(parsed.selectedBudget);
        }
      } catch (e) {
        console.error('Failed to load state', e);
      }
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    const state = {
      step,
      contextData,
      selectedPainPoints,
      selectedGoals,
      selectedHolisticIssues,
      selectedTimeline,
      selectedBudget,
    };
    localStorage.setItem('bizops_needs_analysis_state', JSON.stringify(state));
  }, [step, contextData, selectedPainPoints, selectedGoals, selectedHolisticIssues, selectedTimeline, selectedBudget]);

  const toggleSelection = (
    list: string[],
    item: string,
    setList: (l: string[]) => void,
    max: number = 10,
  ) => {
    if (list.includes(item)) {
      setList(list.filter(i => i !== item));
    } else {
      if (list.length < max) {
        setList([...list, item]);
      }
    }
  };

  const getRecommendedModules = (): RecommendedModule[] => {
    const allTags = [
      ...selectedPainPoints,
      ...selectedGoals,
      ...selectedHolisticIssues,
      contextData.techStack,
      contextData.industry,
    ];

    return modules
      .map((mod) => {
        const matchCount = mod.relevance.filter(tag => allTags.includes(tag)).length;
        const industryBonus = mod.relevance.includes(contextData.industry) ? 3 : 0;
        const holisticBonus = mod.relevance.some(r => selectedHolisticIssues.includes(r)) ? 2 : 0;
        return { ...mod, matchScore: matchCount + industryBonus + holisticBonus };
      })
      .filter(mod => mod.matchScore > 0)
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, 3);
  };

  const getRecommendedServices = (): RecommendedService[] => {
    const allTags = [...selectedPainPoints, ...selectedHolisticIssues, contextData.techStack];

    return serviceSolutions
      .map((svc) => {
        const matchCount = svc.relevance.filter(tag => allTags.includes(tag)).length;
        return { ...svc, matchScore: matchCount };
      })
      .filter(svc => svc.matchScore > 0)
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, 2);
  };

  const handleFinish = () => {
    logger.info('Needs Analysis Lead Data:', contextData);
    setStep('analyzing');
    setTimeout(() => {
      setStep('result');
    }, 2500);
  };

  const handleReset = () => {
    setStep('intro');
    setSelectedPainPoints([]);
    setSelectedGoals([]);
    setSelectedHolisticIssues([]);
    setSelectedTimeline('');
    setSelectedBudget('');
    setContextData({
      name: '',
      company: '',
      email: '',
      phone: '',
      role: '',
      teamSize: '',
      industry: '',
      techStack: '',
    });
    localStorage.removeItem('bizops_needs_analysis_state');
  };

  return (
    <NeedsAnalysisContext
      value={{
        step,
        setStep,
        selectedPainPoints,
        setSelectedPainPoints,
        selectedGoals,
        setSelectedGoals,
        selectedHolisticIssues,
        setSelectedHolisticIssues,
        selectedTimeline,
        setSelectedTimeline,
        selectedBudget,
        setSelectedBudget,
        contextData,
        setContextData,
        toggleSelection,
        handleFinish,
        handleReset,
        getRecommendedModules,
        getRecommendedServices,
      }}
    >
      {children}
    </NeedsAnalysisContext>
  );
};

export const useNeedsAnalysis = () => {
  const context = use(NeedsAnalysisContext);
  if (context === undefined) {
    throw new Error('useNeedsAnalysis must be used within a NeedsAnalysisProvider');
  }
  return context;
};
