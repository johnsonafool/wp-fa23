export function getDate(dateString: string) {
  const formatDate = new Date(dateString);

  const dayOfWeek = formatDate.getDay();

  const weekdays = ["日", "一", "二", "三", "四", "五", "六"];

  const chineseDayOfWeek = weekdays[dayOfWeek];

  const result = `${dateString} (${chineseDayOfWeek})`;

  return result;
}

export function getTodayDate() {
  const today = new Date();

  const dayOfWeek = today.getDay();

  const weekdays = ["日", "一", "二", "三", "四", "五", "六"];

  const chineseDayOfWeek = weekdays[dayOfWeek];

  const result = `${today} (${chineseDayOfWeek})`;

  return result;
}

export function unixTimeToDate(unixTime: number) {
  const date = new Date(unixTime * 1000);

  const dateObj = new Date(unixTime);

  const year = dateObj.getFullYear();
  const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
  const day = dateObj.getDate().toString().padStart(2, "0");
  const dayOfWeek = ["日", "一", "二", "三", "四", "五", "六"][
    dateObj.getDay()
  ];

  const formattedMonth = month.padStart(2, "0");
  const formattedDate = `${year}.${formattedMonth}.${day} (${dayOfWeek})`;

  return formattedDate;
}
