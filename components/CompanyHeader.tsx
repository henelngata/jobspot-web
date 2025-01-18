import Image from "next/image"

Image
export default function CompanyHeader() {
    return(
        <section className="mb-4 p-3">
                <Image
                  className="inline-block relative ml-[40%] mb-4"
                  src={"/images/facebook.png"}
                  width={50}
                  height={50}
                  alt="company logo"
                />
                <section className="flex  justify-between">
                  <p>Google</p>
                  <p>California</p>
                  <p>1 day ago</p>
                </section>
              </section>
    )
}