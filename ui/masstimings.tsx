export function MassTimings() {
  return (
    <div className="flex flex-col items-center gap-8 bg-gradient-to-r from-secondary to-primary p-10">
      <div className="flex w-full justify-evenly">
        <div className="flex items-center justify-center font-bold">
          <p className="text-4xl">Mass Timings</p>
        </div>
        <div className="flex flex-col gap-2 text-3xl font-bold text-white">
          <p>Sundays: 7:15 am and 10:15 am</p>
          <p>Weekdays: 7:45 am</p>
        </div>
      </div>
      <p className="text-2xl font-bold italic">
        Mass Timing are subject to vary on holy days of obligation and feasts
      </p>
    </div>
  )
}
