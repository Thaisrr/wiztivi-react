export type Alert = {
    text: string,
    level: AlertLevel
    duration: AlertDuration
}

export type AlertLevel = 'success' | 'info' | 'warning' | 'error';
export type AlertDuration = 3000 | 5000 | 8000;