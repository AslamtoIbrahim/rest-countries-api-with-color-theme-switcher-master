
const CountryCard = () => {
  return (
    <div className="mx-8 overflow-auto rounded-lg bg-white shadow-xl/70 shadow-blue-950/10">
      <section >
        <img src="https://flagcdn.com/bz.svg" alt="" />
      </section>
      <section className="px-4 py-6 font-nunito space-y-4">
        <p className="capitalize font-bold text-blue-950 ">brazil</p>
        <div className="space-y-1">
            <p className="font-semibold text-sm text-blue-950/85">Population: <span className="font-normal">123.123.542</span></p>
            <p className="font-semibold text-sm text-blue-900/85">Region: <span className="font-normal">America</span></p>
            <p className="font-semibold text-sm text-blue-900/85">Capital: <span className="font-normal">Brazillia</span></p>
        </div>
      </section>
    </div>
  )

     
}

export default CountryCard
