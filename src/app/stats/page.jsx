"use client"
import { fdsContext } from "@/context/ContextProvider";
import { use } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';



const StatsPage = () => {
    const { data } = use(fdsContext)
    console.log(data);
    
    const callCount = data.filter(item => item.action === "Call").length;
    const textCount = data.filter(item => item.action === "Text").length;
    const videoCallCount = data.filter(item => item.action === "Video Call").length;
    
    let data2 = [

        { name: "Call", value: callCount, fill: "green" },
        { name: "Text", value: textCount, fill: "black" },
        { name: "Video Call", value: videoCallCount, fill: "purple" },
    ]

    return (
        <div className='mt-30 mb-30 sm:mt-10 sm:mb-10 sm:max-w-10/12 mx-auto sm:p-10 space-y-10'>
            <h1 className='text-4xl font-bold'>Friendship Analytics</h1>

            <div className='bg-white p-15 rounded-2xl flex flex-col justify-center items-center gap-10'>

                <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 , paddingBottom: "30px"}} responsive>
                    <Pie
                        data={data2}
                        innerRadius="80%"
                        outerRadius="100%"
                        // Corner radius is the rounded edge of each pie slice
                        cornerRadius="50%"
                        fill="#8884d8"
                        // padding angle is the gap between each pie slice
                        paddingAngle={5}
                        dataKey="value"
                        isAnimationActive={true}
                    />
                    <Legend/>
                    <Tooltip/>
                </PieChart>
            </div>
        </div>
    );
};

export default StatsPage;