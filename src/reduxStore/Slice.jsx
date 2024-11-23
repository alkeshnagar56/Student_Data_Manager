import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  data: [{id:1,
    name: 'Pawan',
    age: 22,
    course: 'MCA',
    batch: 'January'
  },
  {id:2,
    name: 'Tarun',
    age: 20,
    course: 'BCA',
    batch: 'August'
  },
  {id:3,
    name: 'Raghu',
    age: 23,
    course: 'M.Tech',
    batch: 'September'
  },
  {id:4,
    name: 'Deepak',
    age: 21,
    course: 'Agriculture',
    batch: 'June'
  },
  {id:5,
    name: 'Samay',
    age: 18,
    course: 'BCA',
    batch: 'March'
  }],
};

const Slice = createSlice({
  name: "student",
  initialState,
  reducers: {
    Add: (state, action) => {
    //    const Actionid = {
    //     //  id: nanoid(),
    //      StudentData: action.payload,
    //    };

       state.data.push(action.payload)
    //  Actionid.push(action.payload)
    //  state.data.push(Actionid)
    //    console.log(Actionid, "ActionId");

    
    // console.log(state.data[0],"Data")
    },
    editData: (state, action) => {
      // console.log(action.payload,"payload")
      const {id, name, age, course, batch} = action.payload
      // console.log(id,name,age,course,batch,"data")
      const idCheck = state.data.find((item)=>(item.id == id))
      if(idCheck){
        idCheck.name=name;
        idCheck.age=age;
        idCheck.course=course;
        idCheck.batch=batch;
      }
    }
  },
});
export const { Add, editData} = Slice.actions;
export default Slice.reducer;
