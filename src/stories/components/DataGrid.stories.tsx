// src/stories/components/DataGrid.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import { type ColumnDef } from '@tanstack/react-table';
import { DataGrid } from '../../components/DataGrid';

const meta: Meta<typeof DataGrid> = {
  title: 'Components/DataGrid',
  component: DataGrid,
  tags: ['autodocs'],
};

export default meta;

// Sample data and columns
type Person = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  status: 'single' | 'in a relationship' | 'complicated';
};

const defaultData: Person[] = [
  { id: 1, firstName: 'Tanner', lastName: 'Linsley', age: 33, status: 'in a relationship' },
  { id: 2, firstName: 'Kevin', lastName: 'Vonderheyde', age: 29, status: 'single' },
  { id: 3, firstName: 'John', lastName: 'Doe', age: 45, status: 'complicated' },
  { id: 4, firstName: 'Jane', lastName: 'Smith', age: 28, status: 'single' },
];

const defaultColumns: ColumnDef<Person>[] = [
  { accessorKey: 'id', header: 'ID' },
  { accessorKey: 'firstName', header: 'First Name' },
  { accessorKey: 'lastName', header: 'Last Name' },
  { accessorKey: 'age', header: 'Age' },
  { accessorKey: 'status', header: 'Status' },
];

export const Basic: StoryObj = {
  args: {
    data: defaultData,
    columns: defaultColumns,
  },
};

// Add this to the end of DataGrid.stories.tsx

// --- Helper to create a large dataset ---
const makeData = (count: number): Person[] => {
  const data: Person[] = [];
  for (let i = 1; i <= count; i++) {
    data.push({
      id: i,
      firstName: `FirstName${i}`,
      lastName: `LastName${i}`,
      age: Math.floor(Math.random() * 50) + 18,
      status: ['single', 'in a relationship', 'complicated'][Math.floor(Math.random() * 3)] as Person['status'],
    });
  }
  return data;
};

export const Virtualized10kRows: StoryObj = {
  args: {
    data: makeData(10000), // Generate 10,000 rows
    columns: defaultColumns,
  },
};