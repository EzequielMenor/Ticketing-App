const StatusDisplay = ({ status }) => {

  const getColor = (status) => {
    console.log(status)
    let color = "bg-slate-700";
    switch (status.toLowerCase()) {
      case "hecho":
        color = "bg-green-200"
        return color;
      case "empezado":
        color = "bg-yellow-200";
        return color;
      case "no empezado":
        color = "bg-red-200";
        return color;
    }
    return color;
  }

  return (
    <span className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColor(status)}`}>
      {status}
    </span>
  )
}

export default StatusDisplay