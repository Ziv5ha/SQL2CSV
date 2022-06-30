import moment from 'moment';

export const getMomentXHoursAgo = (hours: number): string => {
  return moment().subtract(hours, 'hours').format('YYYY-MM-DD HH:mm:ss');
};

export const getNowMoment = (): string => {
  return moment().format('YYYY-MM-DD HH:mm:ss');
};

export const getMoment = (time: string) => {
  return moment(time).format('YYYY-MM-DD HH:mm:ss');
};
