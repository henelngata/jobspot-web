import Link from "next/link";


function NoJob() {
  return (
    <section>
      <h2>No Savings</h2>
      <p>
        You don't have any jobs saved, please find it in search to save jobs
      </p>
      <Link href="/home">Find a job</Link>
    </section>
  );
}

export {
  NoJob
}