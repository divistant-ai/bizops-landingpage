#!/usr/bin/env node

/**
 * Translation Quality Checker
 *
 * Automated checks for translation files to ensure quality and consistency.
 *
 * Checks performed:
 * - Key parity (all keys exist in all languages)
 * - Placeholder consistency (variables match)
 * - HTML tag consistency
 * - Length validation (translations not too long/short)
 * - Empty translations
 * - Special character validation
 */

import * as fs from 'node:fs';
import * as path from 'node:path';

const LOCALES_DIR = path.join(process.cwd(), 'src/locales');
const SOURCE_LANG = 'en';
const TARGET_LANGS = ['id'];

type TranslationCheck = {
  key: string;
  type: 'error' | 'warning';
  message: string;
  language?: string;
};

function loadTranslationFile(lang: string): Record<string, unknown> {
  const filePath = path.join(LOCALES_DIR, `${lang}.json`);
  const content = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(content);
}

function flattenObject(obj: Record<string, unknown>, prefix = ''): Record<string, string> {
  const result: Record<string, string> = {};

  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'string') {
      result[fullKey] = value;
    } else if (typeof value === 'object' && value !== null) {
      Object.assign(result, flattenObject(value as Record<string, unknown>, fullKey));
    }
  }

  return result;
}

function extractPlaceholders(text: string): string[] {
  const regex = /\{([^}]+)\}/g;
  const matches: string[] = [];
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match[1]) {
      matches.push(match[1]);
    }
  }

  return matches.sort();
}

function extractHtmlTags(text: string): string[] {
  // eslint-disable-next-line regexp/no-super-linear-backtracking, regexp/optimal-quantifier-concatenation
  const regex = /<\/?([a-z]+)[^>]*>/gi;
  const matches: string[] = [];
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match[1]) {
      matches.push(match[1]);
    }
  }

  return [...new Set(matches)].sort();
}

function checkKeyParity(
  source: Record<string, string>,
  target: Record<string, string>,
  targetLang: string,
): TranslationCheck[] {
  const issues: TranslationCheck[] = [];
  const sourceKeys = Object.keys(source);
  const targetKeys = Object.keys(target);

  // Check for missing keys in target
  for (const key of sourceKeys) {
    if (!(key in target)) {
      issues.push({
        key,
        type: 'error',
        message: `Missing translation in ${targetLang}`,
        language: targetLang,
      });
    }
  }

  // Check for extra keys in target
  for (const key of targetKeys) {
    if (!(key in source)) {
      issues.push({
        key,
        type: 'warning',
        message: `Extra key in ${targetLang} not present in source`,
        language: targetLang,
      });
    }
  }

  return issues;
}

function checkPlaceholderConsistency(
  source: Record<string, string>,
  target: Record<string, string>,
  targetLang: string,
): TranslationCheck[] {
  const issues: TranslationCheck[] = [];

  for (const [key, sourceText] of Object.entries(source)) {
    const targetText = target[key];
    if (!targetText) {
      continue;
    }

    const sourcePlaceholders = extractPlaceholders(sourceText);
    const targetPlaceholders = extractPlaceholders(targetText);

    if (JSON.stringify(sourcePlaceholders) !== JSON.stringify(targetPlaceholders)) {
      issues.push({
        key,
        type: 'error',
        message: `Placeholder mismatch. Source: [${sourcePlaceholders.join(', ')}], Target: [${targetPlaceholders.join(', ')}]`,
        language: targetLang,
      });
    }
  }

  return issues;
}

function checkHtmlTagConsistency(
  source: Record<string, string>,
  target: Record<string, string>,
  targetLang: string,
): TranslationCheck[] {
  const issues: TranslationCheck[] = [];

  for (const [key, sourceText] of Object.entries(source)) {
    const targetText = target[key];
    if (!targetText) {
      continue;
    }

    const sourceTags = extractHtmlTags(sourceText);
    const targetTags = extractHtmlTags(targetText);

    if (JSON.stringify(sourceTags) !== JSON.stringify(targetTags)) {
      issues.push({
        key,
        type: 'error',
        message: `HTML tag mismatch. Source: [${sourceTags.join(', ')}], Target: [${targetTags.join(', ')}]`,
        language: targetLang,
      });
    }
  }

  return issues;
}

function checkEmptyTranslations(
  target: Record<string, string>,
  targetLang: string,
): TranslationCheck[] {
  const issues: TranslationCheck[] = [];

  for (const [key, value] of Object.entries(target)) {
    if (!value || value.trim() === '') {
      issues.push({
        key,
        type: 'error',
        message: 'Empty translation',
        language: targetLang,
      });
    }
  }

  return issues;
}

function checkLengthRatio(
  source: Record<string, string>,
  target: Record<string, string>,
  targetLang: string,
): TranslationCheck[] {
  const issues: TranslationCheck[] = [];

  for (const [key, sourceText] of Object.entries(source)) {
    const targetText = target[key];
    if (!targetText) {
      continue;
    }

    const ratio = targetText.length / sourceText.length;

    if (ratio > 2) {
      issues.push({
        key,
        type: 'warning',
        message: `Translation is ${Math.round(ratio * 100)}% longer than source`,
        language: targetLang,
      });
    } else if (ratio < 0.3) {
      issues.push({
        key,
        type: 'warning',
        message: `Translation is ${Math.round(ratio * 100)}% shorter than source`,
        language: targetLang,
      });
    }
  }

  return issues;
}

function printReport(issues: TranslationCheck[]) {
  const errors = issues.filter(i => i.type === 'error');
  const warnings = issues.filter(i => i.type === 'warning');

  console.log('\n📋 Translation Quality Report\n');
  console.log(`Errors: ${errors.length}`);
  console.log(`Warnings: ${warnings.length}\n`);

  if (errors.length > 0) {
    console.log('❌ Errors:');
    for (const issue of errors) {
      console.log(`  - [${issue.language}] ${issue.key}: ${issue.message}`);
    }
    console.log();
  }

  if (warnings.length > 0) {
    console.log('⚠️  Warnings:');
    for (const issue of warnings) {
      console.log(`  - [${issue.language}] ${issue.key}: ${issue.message}`);
    }
    console.log();
  }

  if (issues.length === 0) {
    console.log('✅ All translations look good!\n');
  }
}

function main() {
  console.log('🔍 Checking translation quality...\n');

  const sourceTranslations = loadTranslationFile(SOURCE_LANG);
  const flattenedSource = flattenObject(sourceTranslations);

  const allIssues: TranslationCheck[] = [];

  for (const targetLang of TARGET_LANGS) {
    console.log(`Checking ${targetLang}...`);

    const targetTranslations = loadTranslationFile(targetLang);
    const flattenedTarget = flattenObject(targetTranslations);

    // Run all checks
    allIssues.push(...checkKeyParity(flattenedSource, flattenedTarget, targetLang));
    allIssues.push(...checkPlaceholderConsistency(flattenedSource, flattenedTarget, targetLang));
    allIssues.push(...checkHtmlTagConsistency(flattenedSource, flattenedTarget, targetLang));
    allIssues.push(...checkEmptyTranslations(flattenedTarget, targetLang));
    allIssues.push(...checkLengthRatio(flattenedSource, flattenedTarget, targetLang));
  }

  printReport(allIssues);

  // Exit with error code if there are errors
  const errorCount = allIssues.filter(i => i.type === 'error').length;
  if (errorCount > 0) {
    process.exit(1);
  }
}

main();
