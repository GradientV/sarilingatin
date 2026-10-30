const usd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
const usdWhole = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

/** 40 -> '$40', 27.5 -> '$27.50' (whole dollars drop the cents, like the printed menu) */
export function money(amount: number): string {
    return Number.isInteger(amount) ? usdWhole.format(amount) : usd.format(amount);
}

/** always with cents, for totals: 449 -> '$449.00' */
export function moneyExact(amount: number): string {
    return usd.format(amount);
}
