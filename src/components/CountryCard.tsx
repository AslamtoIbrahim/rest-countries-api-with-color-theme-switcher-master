
const CountryCard = () => {
  return (
    <div className="mx-8 overflow-auto rounded-lg bg-white dark:bg-blue-900  shadow-xl/70 shadow-blue-950/10">
      <section >
        <img src="https://flagcdn.com/bz.svg" alt="flag country" />
      </section>
      <section className="px-4 py-6 font-nunito space-y-4  ">
        <p className="capitalize font-bold text-blue-950 dark:text-white/90">brazil</p>
        <div className="space-y-1 font-semibold text-sm text-blue-950/85 dark:text-white/80">
            <p className="">Population: <span className="font-normal">206.123.542</span></p>
            <p className="">Region: <span className="font-normal">America</span></p>
            <p className="">Capital: <span className="font-normal">Brazillia</span></p>
        </div>
      </section>
    </div>
  )

     
}

export default CountryCard
