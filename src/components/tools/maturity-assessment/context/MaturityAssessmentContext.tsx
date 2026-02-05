'use client';

import type { AssessmentResult, CategoryKey, LeadForm, ViewState } from './types';
import React, { createContext, use, useEffect, useState } from 'react';
import { assessmentQuestions, maturityLevels } from '@/data/assessmentQuestions';

type MaturityAssessmentContextProps = {
  viewState: ViewState;
  setViewState: (state: ViewState) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  answers: Record<string, number>;
  setAnswers: (answers: Record<string, number>) => void;
  leadForm: LeadForm;
  setLeadForm: (form: LeadForm) => void;
  assessmentDate: string;
  setAssessmentDate: (date: string) => void;

  // Computed
  progress: number;
  results: AssessmentResult | null;

  // Actions
  handleStartIntro: () => void;
  handleLeadSubmit: (e: React.FormEvent) => void;
  handleAnswer: (score: number) => void;
  handleReset: () => void;
  calculateResults: () => AssessmentResult;
};

const MaturityAssessmentContext = createContext<MaturityAssessmentContextProps | undefined>(undefined);

const STORAGE_KEY = 'bizops_assessment_state';

export const MaturityAssessmentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [viewState, setViewState] = useState<ViewState>('intro');
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [leadForm, setLeadForm] = useState<LeadForm>({
    name: '',
    company: '',
    email: '',
    phone: '',
    role: '',
  });
  const [assessmentDate, setAssessmentDate] = useState<string>('');

  const totalQuestions = assessmentQuestions.length;
  const answeredCount = Object.keys(answers).length;
  const progress = (answeredCount / totalQuestions) * 100;

  // --- PERSISTENCE ---
  useEffect(() => {
    const savedState = localStorage.getItem(STORAGE_KEY);
    if (savedState) {
      try {
        const parsed = JSON.parse(savedState);
        if (parsed.viewState === 'assessment' || parsed.viewState === 'lead-form') {
          setViewState(parsed.viewState);
          setAnswers(parsed.answers || {});
          setLeadForm(parsed.leadForm || { name: '', company: '', email: '', phone: '', role: '' });

          const answeredIds = Object.keys(parsed.answers || {});
          const lastAnsweredIndex = assessmentQuestions.findIndex(
            q => !answeredIds.includes(q.id),
          );
          setCurrentStep(lastAnsweredIndex !== -1 ? lastAnsweredIndex : 0);
        }
      } catch (e) {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  useEffect(() => {
    if (viewState === 'assessment' || viewState === 'lead-form') {
      const stateToSave = {
        viewState,
        answers,
        leadForm,
        timestamp: new Date().getTime(),
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
    }
  }, [viewState, answers, leadForm]);

  // --- ACTIONS ---
  const handleStartIntro = () => {
    setViewState('lead-form');
  };

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/i,
      );
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!leadForm.name || !leadForm.company) {
      alert('Mohon lengkapi nama dan perusahaan.');
      return;
    }

    if (!validateEmail(leadForm.email)) {
      alert('Format email tidak valid.');
      return;
    }

    setViewState('assessment');
  };

  const finishAssessment = () => {
    setAssessmentDate(
      new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
    );
    setViewState('analyzing');
    localStorage.removeItem(STORAGE_KEY);

    setTimeout(() => {
      setViewState('results');
    }, 2500);
  };

  const handleAnswer = (score: number) => {
    const currentQuestion = assessmentQuestions[currentStep];
    if (!currentQuestion) {
      return;
    }

    const newAnswers = { ...answers, [currentQuestion.id]: score };
    setAnswers(newAnswers);

    if (currentStep < totalQuestions - 1) {
      setTimeout(() => setCurrentStep(prev => prev + 1), 250);
    } else if (Object.keys(newAnswers).length >= totalQuestions) {
      finishAssessment();
    }
  };

  const handleReset = () => {
    if (confirm('Apakah Anda yakin ingin mengulang dari awal? Semua progres akan dihapus.')) {
      localStorage.removeItem(STORAGE_KEY);
      setViewState('intro');
      setCurrentStep(0);
      setAnswers({});
      setLeadForm({ name: '', company: '', email: '', phone: '', role: '' });
    }
  };

  const calculateResults = (): AssessmentResult => {
    let totalScore = 0;
    const categoryScores: Record<CategoryKey, { total: number; count: number }> = {
      strategy: { total: 0, count: 0 },
      customer: { total: 0, count: 0 },
      operations: { total: 0, count: 0 },
      technology: { total: 0, count: 0 },
      people: { total: 0, count: 0 },
    };

    Object.entries(answers).forEach(([qId, score]) => {
      totalScore += score;
      const question = assessmentQuestions.find(q => q.id === qId);
      if (question) {
        const cat = question.category as CategoryKey;
        if (categoryScores[cat]) {
          categoryScores[cat].total += score;
          categoryScores[cat].count += 1;
        }
      }
    });

    const avgScore = totalScore / totalQuestions;

    const maturityLevel
      = maturityLevels.find(m => avgScore >= m.minScore && avgScore <= m.maxScore)
        || maturityLevels[0]!;

    return { avgScore, categoryScores, maturityLevel };
  };

  const results = viewState === 'results' ? calculateResults() : null;

  return (
    <MaturityAssessmentContext
      value={{
        viewState,
        setViewState,
        currentStep,
        setCurrentStep,
        answers,
        setAnswers,
        leadForm,
        setLeadForm,
        assessmentDate,
        setAssessmentDate,
        progress,
        results,
        handleStartIntro,
        handleLeadSubmit,
        handleAnswer,
        handleReset,
        calculateResults,
      }}
    >
      {children}
    </MaturityAssessmentContext>
  );
};

export const useMaturityAssessment = () => {
  const context = use(MaturityAssessmentContext);
  if (!context) {
    throw new Error('useMaturityAssessment must be used within a MaturityAssessmentProvider');
  }
  return context;
};
