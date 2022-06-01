import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import { SuperDoubleRange } from './common/c8-SuperDoubleRange/SuperDoubleRange'
import styles from './HW11.module.css'

function HW11() {
    const [value1, setValue1] = useState<number>(0)
    const [value2, setValue2] = useState<number>(100)

    const onChangeRange = (value: number) => {
        setValue1(value)
    }

    const onChangeDoubleRange = (value: number[]) => {
        setValue1(value[0])
        setValue2(value[1])
    }

    return (
        <div>
            <hr/>
            --homeworks 11--

            {/*should work (должно работать)*/}
            <div className={styles.block}>
                <div>
                    <span>{value1}</span>
                    <SuperRange
                        onChangeRange={onChangeRange}
                        // сделать так чтоб value1 изменялось
                    />
                </div>

                <div>
                    <span>{value1}</span>
                    <SuperDoubleRange
                        value={[value1, value2]}
                        onChangeRange={onChangeDoubleRange}
                        // сделать так чтоб value1 и value2 изменялось
                    />
                    <span>{value2}</span>
                </div>
            </div>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
