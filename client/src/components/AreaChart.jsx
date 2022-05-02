import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from 'recharts'

const AreaChartComponent = ({ data }) => {
    return (
        <ResponsiveContainer width='100%' height={300}>
            <AreaChart data={data} margin={{ top: 50 }}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='date' stroke="#dbd4ec" />
                <YAxis allowDecimals={false} stroke="#b49de7" />
                <Tooltip />
                <Area type='monotone' dataKey='count' stroke='#b49de7' fill='#44228e9a' />
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default AreaChartComponent