'use client';

import type { CalculationError } from '@/utils/errorHandling';
import { AlertCircle, Factory, Gauge, Info, Loader2, TrendingUp } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import ActionButtons from '@/components/tools/shared/ActionButtons';
import ErrorDisplay from '@/components/tools/shared/ErrorDisplay';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import {
  safeCalculate,
  safeDivide,
  safePercentage,
  validateFields,
  validateNumber,
} from '@/utils/errorHandling';
import {
  downloadAsText,
  formatResultAsText,
  generateShareText,
  shareResult,
} from '@/utils/exportTools';

type OEEResult = {
  availability: number;
  performance: number;
  quality: number;
  oee: number;
  classification: string;
  lossesBreakdown: {
    plannedDowntime: number;
    unplannedDowntime: number;
    speedLoss: number;
    qualityLoss: number;
  };
};

export default function OEECalculator() {
  const t = useTranslations('CustomerTools.ProductionEfficiency');

  const [plannedProductionTime, setPlannedProductionTime] = useState<string>('480');
  const [downtime, setDowntime] = useState<string>('60');
  const [idealCycleTime, setIdealCycleTime] = useState<string>('1');
  const [totalUnits, setTotalUnits] = useState<string>('400');
  const [goodUnits, setGoodUnits] = useState<string>('380');
  const [result, setResult] = useState<OEEResult | null>(null);
  const [errors, setErrors] = useState<CalculationError[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateOEE = () => {
    setErrors([]);
    setIsCalculating(true);

    const validationErrors = validateFields([
      () => validateNumber(plannedProductionTime, { min: 0, fieldName: t('planned_time') }),
      () => validateNumber(downtime, { min: 0, fieldName: t('downtime') }),
      () => validateNumber(idealCycleTime, { min: 0, fieldName: t('cycle_time') }),
      () => validateNumber(totalUnits, { min: 0, fieldName: t('total_units') }),
      () => validateNumber(goodUnits, { min: 0, fieldName: t('good_units') }),
    ]);

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      setIsCalculating(false);
      return;
    }

    setTimeout(() => {
      const calculatedResult = safeCalculate<OEEResult>(
        () => {
          const planned = Number.parseFloat(plannedProductionTime) || 0;
          const down = Number.parseFloat(downtime) || 0;
          const cycleTime = Number.parseFloat(idealCycleTime) || 0;
          const total = Number.parseFloat(totalUnits) || 0;
          const good = Number.parseFloat(goodUnits) || 0;

          const runTime = planned - down;
          const availability = safePercentage(runTime, planned);

          const idealProduction = safeDivide(runTime, cycleTime);
          const performance = safePercentage(total, idealProduction);

          const quality = safePercentage(good, total);

          const oee = (availability * performance * quality) / 10000;

          let classification = t('classification_poor');
          if (oee >= 85) {
            classification = t('classification_world_class');
          } else if (oee >= 60) {
            classification = t('classification_good');
          } else if (oee >= 40) {
            classification = t('classification_fair');
          }

          const lossesBreakdown = {
            plannedDowntime: 0,
            unplannedDowntime: safePercentage(down, planned),
            speedLoss: 100 - performance,
            qualityLoss: 100 - quality,
          };

          return {
            availability,
            performance,
            quality,
            oee,
            classification,
            lossesBreakdown,
          };
        },
        (error) => {
          setErrors([error]);
        },
      );

      if (calculatedResult) {
        setResult(calculatedResult);
      }

      setIsCalculating(false);
    }, 100);
  };

  const handleDownload = () => {
    if (!result) {
      return;
    }

    const content = formatResultAsText(
      t('download_title'),
      {
        [t('download_planned_time')]: plannedProductionTime,
        [t('download_downtime')]: downtime,
        [t('download_cycle_time')]: idealCycleTime,
        [t('download_total_units')]: totalUnits,
        [t('download_good_units')]: goodUnits,
      },
      {
        [t('download_availability')]: `${result.availability.toFixed(2)}%`,
        [t('download_performance')]: `${result.performance.toFixed(2)}%`,
        [t('download_quality')]: `${result.quality.toFixed(2)}%`,
        [t('download_oee')]: `${result.oee.toFixed(2)}%`,
        [t('download_classification')]: result.classification,
      },
    );

    const timestamp = Date.now();
    downloadAsText(content, `oee-${timestamp}.txt`);
  };

  const handleShare = async () => {
    if (!result) {
      return;
    }

    const shareText = generateShareText(
      t('share_title'),
      `${t('share_oee_score')}: ${result.oee.toFixed(1)}% (${result.classification})`,
    );

    await shareResult(t('share_title'), shareText);
  };

  const getOEEBgColor = (oee: number) => {
    if (oee >= 85) {
      return 'from-green-600 to-emerald-600';
    }
    if (oee >= 60) {
      return 'from-blue-600 to-cyan-600';
    }
    if (oee >= 40) {
      return 'from-yellow-600 to-orange-600';
    }
    return 'from-red-600 to-pink-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
            <Factory className="h-4 w-4" />
            Customer Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">{t('title')}</h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            {t('subtitle')}
          </p>
        </div>

        <ErrorDisplay errors={errors} className="mx-auto mb-6 max-w-4xl" />

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">
                {t('input_title')}
              </h2>

              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="planned-time"
                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-slate-300"
                  >
                    {t('planned_time')}
                  </label>
                  <input
                    id="planned-time"
                    type="text"
                    value={plannedProductionTime}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '');
                      setPlannedProductionTime(value);
                    }}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                    placeholder="480"
                    aria-describedby="planned-time-help"
                  />
                  <p
                    id="planned-time-help"
                    className="mt-1 text-xs text-gray-500 dark:text-slate-500"
                  >
                    {t('planned_time_help')}
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="downtime"
                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-slate-300"
                  >
                    {t('downtime')}
                  </label>
                  <input
                    id="downtime"
                    type="text"
                    value={downtime}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '');
                      setDowntime(value);
                    }}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                    placeholder="60"
                    aria-describedby="downtime-help"
                  />
                  <p id="downtime-help" className="mt-1 text-xs text-gray-500 dark:text-slate-500">
                    {t('downtime_help')}
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="cycle-time"
                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-slate-300"
                  >
                    {t('cycle_time')}
                  </label>
                  <input
                    id="cycle-time"
                    type="text"
                    value={idealCycleTime}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^\d.]/g, '');
                      setIdealCycleTime(value);
                    }}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                    placeholder="1"
                    aria-describedby="cycle-time-help"
                  />
                  <p
                    id="cycle-time-help"
                    className="mt-1 text-xs text-gray-500 dark:text-slate-500"
                  >
                    {t('cycle_time_help')}
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="total-units"
                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-slate-300"
                  >
                    {t('total_units')}
                  </label>
                  <input
                    id="total-units"
                    type="text"
                    value={totalUnits}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '');
                      setTotalUnits(value);
                    }}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                    placeholder="400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="good-units"
                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-slate-300"
                  >
                    {t('good_units')}
                  </label>
                  <input
                    id="good-units"
                    type="text"
                    value={goodUnits}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '');
                      setGoodUnits(value);
                    }}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                    placeholder="380"
                  />
                </div>

                <Button
                  onClick={calculateOEE}
                  className="w-full bg-indigo-600 hover:bg-indigo-700"
                  size="lg"
                  disabled={isCalculating}
                  aria-label="Hitung OEE"
                >
                  {isCalculating
                    ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          {t('calculating')}
                        </>
                      )
                    : (
                        <>
                          <Gauge className="mr-2 h-5 w-5" />
                          {t('calculate_button')}
                        </>
                      )}
                </Button>
              </div>
            </Card>

            <Card className="border-l-4 border-indigo-500 bg-indigo-50 p-4 dark:border-indigo-600 dark:bg-slate-900">
              <div className="flex gap-2">
                <Info className="h-5 w-5 flex-shrink-0 text-indigo-600 dark:text-indigo-400" />
                <div className="text-xs text-gray-700 dark:text-slate-300">
                  <p className="mb-1 font-semibold dark:text-white">{t('info_title')}</p>
                  <p>{t('info_formula')}</p>
                  <ul className="mt-2 space-y-0.5">
                    <li>
                      •
                      <strong>{t('info_world_class')}</strong>
                      {' '}
                      ≥ 85%
                    </li>
                    <li>
                      •
                      <strong>{t('info_good')}</strong>
                      {' '}
                      60-84%
                    </li>
                    <li>
                      •
                      <strong>{t('info_fair')}</strong>
                      {' '}
                      40-59%
                    </li>
                    <li>
                      •
                      <strong>{t('info_poor')}</strong>
                      {' '}
                      &lt; 40%
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            {result
              ? (
                  <div
                    role="region"
                    aria-live="polite"
                    aria-label="Hasil perhitungan OEE"
                    className="space-y-6"
                  >
                    <Card className={`bg-gradient-to-br ${getOEEBgColor(result.oee)} p-6 text-white`}>
                      <h3 className="mb-4 text-lg font-semibold">{t('oee_score')}</h3>
                      <div className="mb-4 text-center">
                        <p className="text-6xl font-bold">
                          {result.oee.toFixed(1)}
                          %
                        </p>
                        <p className="mt-2 text-xl font-semibold">{result.classification}</p>
                      </div>
                      <div className="grid grid-cols-3 gap-3 border-t border-white/20 pt-4 text-center text-sm">
                        <div>
                          <p className="opacity-80">{t('availability')}</p>
                          <p className="text-lg font-bold">
                            {result.availability.toFixed(1)}
                            %
                          </p>
                        </div>
                        <div>
                          <p className="opacity-80">{t('performance')}</p>
                          <p className="text-lg font-bold">
                            {result.performance.toFixed(1)}
                            %
                          </p>
                        </div>
                        <div>
                          <p className="opacity-80">{t('quality')}</p>
                          <p className="text-lg font-bold">
                            {result.quality.toFixed(1)}
                            %
                          </p>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6">
                      <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white">
                        <AlertCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                        {t('losses_title')}
                      </h3>

                      <div className="space-y-3">
                        <div className="rounded-lg bg-red-50 p-4 dark:bg-red-950/20">
                          <div className="mb-1 flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-700 dark:text-slate-300">
                              {t('downtime_loss')}
                            </span>
                            <span className="text-lg font-bold text-red-600 dark:text-red-400">
                              {result.lossesBreakdown.unplannedDowntime.toFixed(1)}
                              %
                            </span>
                          </div>
                          <p className="text-xs text-gray-600 dark:text-slate-400">
                            {t('downtime_loss_desc', { minutes: downtime })}
                          </p>
                        </div>

                        <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950/20">
                          <div className="mb-1 flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-700 dark:text-slate-300">
                              {t('speed_loss')}
                            </span>
                            <span className="text-lg font-bold text-yellow-600 dark:text-yellow-400">
                              {result.lossesBreakdown.speedLoss.toFixed(1)}
                              %
                            </span>
                          </div>
                          <p className="text-xs text-gray-600 dark:text-slate-400">
                            {t('speed_loss_desc')}
                          </p>
                        </div>

                        <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-950/20">
                          <div className="mb-1 flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-700 dark:text-slate-300">
                              {t('quality_loss')}
                            </span>
                            <span className="text-lg font-bold text-orange-600 dark:text-orange-400">
                              {result.lossesBreakdown.qualityLoss.toFixed(1)}
                              %
                            </span>
                          </div>
                          <p className="text-xs text-gray-600 dark:text-slate-400">
                            {t('quality_loss_desc', {
                              units: Number.parseFloat(totalUnits) - Number.parseFloat(goodUnits),
                            })}
                          </p>
                        </div>
                      </div>

                      <ActionButtons
                        onDownload={handleDownload}
                        onShare={handleShare}
                        disabled={!result}
                        className="mt-6"
                      />
                    </Card>

                    <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 dark:from-blue-950/20 dark:to-indigo-950/20">
                      <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">
                        {t('recommendations_title')}
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-700 dark:text-slate-300">
                        {result.availability < 90 && (
                          <li className="flex items-start gap-2">
                            <span className="text-red-600 dark:text-red-400">•</span>
                            <span>{t('rec_reduce_downtime')}</span>
                          </li>
                        )}
                        {result.performance < 95 && (
                          <li className="flex items-start gap-2">
                            <span className="text-yellow-600 dark:text-yellow-400">•</span>
                            <span>{t('rec_optimize_speed')}</span>
                          </li>
                        )}
                        {result.quality < 99 && (
                          <li className="flex items-start gap-2">
                            <span className="text-orange-600 dark:text-orange-400">•</span>
                            <span>{t('rec_improve_quality')}</span>
                          </li>
                        )}
                      </ul>
                    </Card>
                  </div>
                )
              : (
                  <Card className="flex h-full items-center justify-center p-12 text-center">
                    <div>
                      <Factory className="mx-auto mb-4 h-16 w-16 text-gray-300" />
                      <p className="text-gray-500 dark:text-slate-500">{t('empty_state')}</p>
                    </div>
                  </Card>
                )}
          </div>
        </div>

        {result && (
          <Card className="mt-8 border-2 border-indigo-200 bg-gradient-to-r from-indigo-50 to-purple-50 p-6 dark:border-indigo-800 dark:from-slate-900 dark:to-slate-800">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-indigo-100 p-3 dark:bg-indigo-950">
                <TrendingUp className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div className="flex-1">
                <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                  {t('upsell_title')}
                </h3>
                <p className="mb-4 text-gray-600 dark:text-slate-400">{t('upsell_desc')}</p>
                <div className="flex flex-wrap gap-3">
                  <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                    {t('upsell_cta')}
                  </Button>
                  <Button variant="outline" size="lg">
                    {t('upsell_demo')}
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        )}

        <Card className="mt-8 border-l-4 border-indigo-500 bg-indigo-50 p-6 dark:border-indigo-600 dark:bg-slate-900">
          <div className="flex gap-3">
            <AlertCircle className="h-5 w-5 flex-shrink-0 text-indigo-600 dark:text-indigo-400" />
            <div className="text-sm text-gray-700 dark:text-slate-300">
              <p className="mb-2 font-semibold dark:text-white">{t('tips_title')}</p>
              <ul className="list-inside list-disc space-y-1">
                <li>{t('tip_1')}</li>
                <li>{t('tip_2')}</li>
                <li>{t('tip_3')}</li>
                <li>{t('tip_4')}</li>
                <li>{t('tip_5')}</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
