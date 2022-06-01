import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
    return `${value}°C`;
}

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number[]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}


export const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        value,
        onChangeRange
    }
) => {

    const handleChange = (event: Event, newValue: number | number[]) => {
        if (onChangeRange) {
            onChangeRange(newValue as number[])
        }
    };


    return (
            <Box sx={{width: 300}}>
                <Slider
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    size={"small"}
                />
            </Box>
    );
}