import { Level } from "../../helpers/imc"
import s from './GridItem.module.css'
import upImage from '../../assets/up.png'
import downImage from '../../assets/down.png'

type Props = {
    data: Level
}

export const GridItem = ({ data }: Props) => {
    return (
        <div className={s.main} style={{ backgroundColor: data.color }}>
            <div className={s.gridIcon}>
                <img src={data.icon === 'up' ? upImage : downImage} alt="" width={30} />
            </div>
            <div className={s.gridTitle}>
                {data.title}
            </div>
            <div className={s.gridInfo}>
                <>
                    BMI is between <strong>{data.imc[0]}</strong> and <strong>{data.imc[1]}</strong>
                </>
            </div>
        </div>
    )
}