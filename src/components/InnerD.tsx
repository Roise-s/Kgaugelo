import { AboutInfo } from "./AboutInfo"
import { TableDemo } from "./TechTable"

const InnerD = ({ Context }: InnerBarParams) => {
    if (Context == "Tech") {
        return (
            <div className="">
                <TableDemo />
            </div>
        )
    }

    if (Context == "About") {
        return (
            <div className="">
                <AboutInfo />
            </div>
        )
    }
}

export default InnerD
