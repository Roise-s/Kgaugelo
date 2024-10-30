import './lossStyles/index.css';
import Back from './subComponent/Back';
import Front from './subComponent/Front';

const TechList = ({ title }: TechListProps) => {

  return (
    <section className="techlist">
        <div className="divTech">
            <p className="title">{title}</p>
        </div>
        <div className="techd">
            {title === 'Front End' ? <Front /> : <Back />}
        </div>

    </section>
  )
}

export default TechList
