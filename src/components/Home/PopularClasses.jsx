import MFTitle from "../Common/MFTitle"
import LayoutSize from "../Layouts/LayoutSize"
import ClassCard from "../Cards/ClassCard"
import { Link } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import api from "../../lib/API"
const PopularClasses = () => {
    const { data: classes, isLoading, isError, error } = useQuery(
        {
            queryKey: 'classes',
            queryFn: () => api.get('/popular-classes')
        }
    )
    return (
        <div className="my-32">
            <LayoutSize>
                <MFTitle title="Popular Classes" tagline="Discover our popular classes and explore a diverse range of disciplines." />
                {
                    isLoading && <p>Loading...</p>
                }
                {
                    classes?.data.length === 0 && <p className="text-center">Be the first Publisher?</p>
                }
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7 md:gap-10 pt-5">
                    {
                        classes?.data.map((item, index) => (
                            <ClassCard key={index} item={item} />
                        ))
                    }
                </div>
                {!classes?.data.length == 0 && <div className="text-center">
                    <button className="bg-primary text-white px-5 py-2 rounded-md mt-10">
                        <Link to="/classes">View All Classes</Link>
                    </button>
                </div>}
            </LayoutSize>
        </div>
    )
}

export default PopularClasses