import MFButton from "../Common/MFButton"
import LayoutSize from "../Layouts/LayoutSize"

const Subscribe = () => {
    return (
        <div className="my-32">
            <LayoutSize>
                <div className="bg-[url(/images/cta-img.png)] rounded-md bg-no-repeat bg-cover bg-center relative">
                    <div className="py-36 backdrop-blur-sm px-10 bg-gradient-to-r from-tertiary/50 to-secondary/30 grid grid-cols-2">
                        <div>
                            <h2 className="cta__title text-md md:text-3xl font-extrabold uppercase text-white">Never Miss a Beat - Subscribe to Our Newsletter</h2>
                            <p className="text-sm font-light text-white">Become a Part of Our Artistic Family</p>
                            <div className="mt-5">
                                <MFButton text={"Subscribe"} path={"#"} />
                            </div>
                        </div>
                        <div>
                            <img className="absolute -right-[31px] -top-10 w-56" src="/images/boy-cta.png" alt="" />
                        </div>
                    </div>
                </div>
            </LayoutSize>
        </div>
    )
}

export default Subscribe