import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts'

const BarChartComponent = ({ data }) => {
    return (
        <ResponsiveContainer width='100%' height={300}>
            <BarChart data={data} margin={{ top: 50 }}>
                <CartesianGrid strokeDasharray='3 3 ' />
                <XAxis dataKey='date' stroke="#dbd4ec" />
                <YAxis allowDecimals={false} stroke="#b49de7" />
                <Tooltip />
                <Bar dataKey='count' fill='#44228e9a' barSize={75} />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default BarChartComponent