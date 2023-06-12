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
                {isLoading && <div className='mt-5 flex flex-col items-center text-center'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            width={80}
            preserveAspectRatio="xMidYMid"
            style={{ background: 'none' }}
          >
            <circle
              cx="50"
              cy="50"
              fill="none"
              stroke="#EC3899"
              strokeWidth="10"
              r="30"
              strokeDasharray="165 57"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                dur="1s"
                values="0 50 50;360 50 50"
                keyTimes="0;1"
              ></animateTransform>
            </circle>
          </svg>
          <p>
            Loading...
          </p>
        </div>}
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