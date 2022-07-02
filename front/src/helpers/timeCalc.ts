import moment from 'moment';

export const getMomentXHoursAgo = (hours: number): string => {
  return moment().subtract(hours, 'hours').format('YYYY-MM-DD HH:mm:ss');
};

export const getNowMoment = (): string => {
  return moment().format('YYYY-MM-DD HH:mm:ss');
};

export const getMoment = (time: string | undefined) => {
  return time ? moment(time).format('YYYY-MM-DD HH:mm:ss') : '';
};
