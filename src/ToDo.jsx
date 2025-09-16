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
import { useDispatch, useSelector } from 'react-redux';
import { addTask, removeTask, editTask, toggleTask } from './redux/slices/todoSlice';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


function LinearProgressWithLabel(props) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" sx={{ color: 'white' }}>
                    {`${Math.round(props.value)}%`}
                </Typography>
            </Box>
        </Box>
    );
}

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function ToDo() {

    const userTask = useSelector(state => state.todoReducer.tasks)
    const dispatch = useDispatch()

    const [taskText, setTaskText] = React.useState("")
    const [editingId, setEditingId] = React.useState(null)
    const [activeTab,setActiveTab]=React.useState("all")

    //progress bar
    const totalTasks = userTask.length;
    const completedTasks = userTask.filter(task => task.completed).length;
    const progressbar = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);


    //filter section
    const filteredTasks = userTask.filter(task => {
    if (activeTab === "all") return true;
    if (activeTab === "completed") return task.completed;
    if (activeTab === "pending") return !task.completed;
    return true;
});

    //handle add and update btn
    const handleAddOrUpdateTask = () => {
        if (taskText.trim() != "") {
            if (editingId == null) {
                //add new task
                dispatch(addTask(taskText))
            }
            else {
                //update task
                dispatch(editTask({ id: editingId, text: taskText }))
                setEditingId(null)
            }
            setTaskText("")

        }
    }



    // handle delete btn
    const handleDeleteTask = (id) => {
        dispatch(removeTask(id))
    }

    //handle edit btn
    const handleEditTask = (task) => {
        setTaskText(task.text)
        setEditingId(task.id)
    }

    //handle toggle btn
    const handleToggle = (id) => {
        dispatch(toggleTask(id))
    }



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
                        <input onChange={(e) => setTaskText(e.target.value)} value={taskText}
                            type="text"
                            placeholder='What needs to be done?'
                            className='flex-grow border text-black rounded placeholder-gray-500 p-1! px-3! text-white focus:outline-2 focus:outline-offset-1 focus:outline-blue-500 '
                        />
                        <button
                            onClick={handleAddOrUpdateTask}
                            className='bg-green-700 py-1! px-4! rounded ms-3! cursor-pointer hover:bg-green-600 flex items-center justify-center gap-1'
                        >
                            {editingId == null ? <AddIcon /> : <AddCircleOutlineIcon />}
                            {editingId == null ? "Add" : "Update"}
                        </button>

                    </div>

                    <Box sx={{ width: '100%' }}>
                        <LinearProgressWithLabel value={progressbar} />
                       
                    </Box>

                    {/* tab switching */}
                    <ul className='flex sm:gap-[7rem] gap-6'>
                        <li onClick={() => setActiveTab("all")} className={`cursor-pointer font-semibold  ${activeTab === "all" ? "text-blue-400" :"text-gray-600"}`}>All</li>
                        <li onClick={() => setActiveTab("completed")} className={`cursor-pointer font-semibold   ${activeTab === "completed" ? "text-blue-400" :"text-gray-400"}`}>Completed</li>
                         <li onClick={() => setActiveTab("pending")} className={`cursor-pointer font-semibold  ${activeTab === "pending" ? "text-blue-400" :"text-gray-400"}`}>Pending</li>
                    </ul>


                    {/* task container */}
                    <div className="flex flex-col gap-3 w-full">

                        {/* duplicating */}
                        {
  filteredTasks.length > 0 ? (
    [...filteredTasks]
      .sort((a,b)=>a.completed - b.completed) // keep completed tasks at the bottom
      .map(item => (
        <div key={item.id} className='w-full text-left bg-gray-800 rounded-lg px-2 py-2 flex justify-between items-center hover:bg-gray-700'>
          <div className='flex items-center gap-2'>
            <Checkbox
              checked={item.completed}
              onChange={() => handleToggle(item.id)}
              sx={{ color: 'white' }}
            />
            <span className={`text-lg ${item.completed ? "line-through text-gray-400" : "text-white"}`}>
              {item.text}
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <Tooltip title="Delete" placement="bottom-end">
              <DeleteIcon onClick={() => handleDeleteTask(item.id)} className='hover:text-red-500 cursor-pointer' />
            </Tooltip>
            <Tooltip title="Edit" placement="bottom-end">
              <EditIcon onClick={() => handleEditTask(item)} className='hover:text-blue-500 cursor-pointer me-4!' />
            </Tooltip>
          </div>
        </div>
      ))
  ) : (
    <p className='text-lg'>No tasks!!!</p>
  )
}


                    </div>


                </div>
            </div>
        </div>
    )
}

export default ToDo
