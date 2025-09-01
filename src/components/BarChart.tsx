// src/components/BarChart.tsx

import React from 'react';
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import styles from './BarChart.module.css';

interface ChartProps {
  data: any[];
  // Accessibility props
  chartTitle: string;
  chartDescription: string;
}

export const BarChart = ({ data, chartTitle, chartDescription }: ChartProps) => {
  // We read the CSS variables from the document root for theming
  const primaryColor = 'var(--primary)';
  const foregroundColor = 'var(--foreground)';
  const surfaceColor = 'var(--surface)';

  return (
    <div className={styles.container}>
      <ResponsiveContainer width="100%" height={300}>
        <RechartsBarChart
          data={data}
          // Link the chart to its title and description for screen readers
          aria-labelledby="chart-title"
          aria-describedby="chart-description"
        >
          {/* Add accessible title and description inside the SVG */}
          <title id="chart-title">{chartTitle}</title>
          <desc id="chart-description">{chartDescription}</desc>

          <CartesianGrid stroke={surfaceColor} strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke={foregroundColor} />
          <YAxis stroke={foregroundColor} />
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--background)',
              borderColor: 'var(--surface)',
            }}
          />
          <Legend />
          <Bar dataKey="value" fill={primaryColor} />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};