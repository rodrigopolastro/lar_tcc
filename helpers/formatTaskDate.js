const PORTUGUESE_MONTHS = {
  0:  "Jan",
  1:  "Fev",
  2:  "Mar",
  3:  "Abr",
  4:  "Mai",
  5:  "Jun",
  6:  "Jul",
  7:  "Ago",
  8:  "Set",
  9:  "Out",
  10: "Nov",
  11: "Dec"
}

function formatTaskDate(taskDate, taskTime){
  if(!taskDate){ return "Sem Data"; }

  const date = new Date(taskDate);
  date.setDate(date.getDate() + 1); //add one day due to timezone difference
  let day = date.getDate();
  let month = PORTUGUESE_MONTHS[date.getMonth()];
  let formattedDate = `${day} ${month}`;
  formattedDate += taskTime ? `, ${taskTime}`: '';

  return formattedDate;
}

