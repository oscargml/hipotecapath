export interface Bank {
  id: string;
  name: string;
  product: string;
  nominalRate: number;
  cat: number;
  maxTermYears: number;
  minDownPaymentPct: number;
  type: 'private' | 'government';
  notes: string;
  highlight?: boolean;
}

export interface IsaiState {
  name: string;
  code: string;
  isaiRate: number;
  notaryFeeMin: number;
  notaryFeeMax: number;
  registrationFeePct: number;
  notes: string;
}

export interface AmortRow {
  period: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
}

export interface AdvisorInput {
  monthlyIncome: number;
  monthlyDebts: number;
  propertyValue: number;
  downPaymentPct: number;
  state: string;
  employmentType: 'empleado' | 'autoempleado' | 'mixto';
  creditScore: 'excelente' | 'bueno' | 'regular' | 'bajo';
  hasInfonavit: boolean;
}
