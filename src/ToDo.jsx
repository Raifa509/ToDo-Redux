import AddIcon from '@mui/icons-material/Add';
import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';

// function LinearProgressWithLabel(props) {
//     return (
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <Box sx={{ width: '100%', mr: 1 }}>
//                 <LinearProgress variant="determinate" {...props} />
//             </Box>
//             <Box sx={{ minWidth: 35 }}>
//                 <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//                     {`${Math.round(props.value)}%`}
//                 </Typography>
//             </Box>
//         </Box>
//     );
// }

// LinearProgressWithLabel.propTypes = {
//     /**
//      * The value of the progress indicator for the determinate and buffer variants.
//      * Value between 0 and 100.
//      */
//     value: PropTypes.number.isRequired,
// };


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function ToDo() {

    // const [progress, setProgress] = React.useState(10);




    return (
        <div id='home' className="px-4! sm:px-0">
            <div className="flex flex-col justify-center items-center h-screen">
                <div className="text-white rounded-xl shadow-lg text-center flex flex-col items-center gap-10 w-full max-w-3xl p-6! sm:p-8!"
                    style={{ background: 'linear-gradient(45deg, #000000, #0A192F)' }}
                >
                    <div className='flex justify-center items-center sm:gap-3\2 gap-1 mt-3!'>
                        <img src="./clock.gif" alt="" className='w-10 sm:w-15' />
                        <h2 className="text-3xl sm:text-5xl font-bold">TickIt</h2>
                    </div>

                    {/* Input */}
                    <div className='flex sm:mt-5! mt-2! sm:gap-2 w-full'>
                        <input
                            type="text"
                            placeholder='What needs to be done?'
                            className='flex-grow border text-black rounded placeholder-gray-500 p-1! px-3! text-white focus:outline-2 focus:outline-offset-1 focus:outline-blue-500 '
                        />
                        <button className='bg-green-700 py-1! px-4! rounded ms-3! cursor-pointer hover:bg-green-600 flex items-center justify-center gap-1'><AddIcon />Add</button>
                    </div>

                    {/* <Box sx={{ width: '100%' }}>
                        <LinearProgressWithLabel value={progress} />
                    </Box> */}

                    {/* task container */}
                    <div className="flex flex-col gap-3 w-full">
                        <div className='w-full text-left bg-gray-800 rounded-lg px-2 py-2 flex justify-between items-center'>
                            <div className='flex items-center gap-2'>
                                <Checkbox {...label} sx={{ color: 'white' }} />
                                <span className='text-lg text-white'>Buy Groceries</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <Tooltip title="Delete" placement="bottom-end">
                                    <DeleteIcon className='hover:text-red-500 cursor-pointer' />
                                </Tooltip>
                                <Tooltip title="Edit" placement="bottom-end">
                                    <EditIcon className='hover:text-blue-500 cursor-pointer me-4!' />
                                </Tooltip>
                            </div>
                        </div>
                        
                    </div>





                </div>
            </div>
        </div>
    )
}

export default ToDo
