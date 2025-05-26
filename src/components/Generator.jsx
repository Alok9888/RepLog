import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { WORKOUTS, SCHEMES } from '../utils/swoldier'
import Button from './Button'

function Header(props) {
  const {title, index, description} = props
  return(
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-center gap-2'>
        <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
        <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
      </div>
      <p className='text-sm sm:text-base mx-auto'>{description}</p>
    </div>
  )
}

export default function Generator(props) {

  const [showModal, setShowModal] = useState(false)
  const {poison, setPoison, muscles, setMuscles, goal, setGoal, updateWorkout} = props

 function updateMuscles(muscleGroup) {
        if (muscles.includes(muscleGroup)) {
            setMuscles(muscles.filter(val => val !== muscleGroup))
            return
        }

        if (muscles.length > 2) {
            return
        }

        if (poison !== 'individual') {
            setMuscles([muscleGroup])
            setShowModal(false)
            return
        }

        setMuscles([...muscles, muscleGroup])
        if (muscles.length === 2) {
            setShowModal(false)
        }

}

  return (
    <SectionWrapper id={'generate'} header={"generate your workout"} title={['It\'s', 'Huge', 'o\'clock']}>
      <Header index={'01'} title={'Pick your poison'} description={'Select the workout you wish to enjoy.'}/>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
        {Object.keys(WORKOUTS).map((type, typeIndex)=>{
          return(
            <button key={typeIndex} onClick={()=>{setMuscles([]); setPoison(type)}} className={'bg-slate-950 px-2 border-[2px] py-3 rounded-lg duration-200  hover:border-blue-600 uppercase ' + (type === poison? 'border-blue-700' : 'border-blue-400')}>
              {type.replaceAll("_", " ")}
            </button>
          )
        })}
      </div>
      <Header index={'02'} title={'Lock on tagets'} description={'Select the muscles judged for anihilation.'}/>
      <div className='bg-slate-950 border-[2px] border-solid border-blue-400 rounded-lg flex flex-col'>
        <button onClick={()=>{setShowModal(!showModal)}} className='relative flex justify-center items-center p-3'>
          <p className='capitalize'>{muscles.length === 0 ? 'Select muscle groups' : muscles.join(' ')}</p>
          <i className="fa-solid absolute right-3 top-1/2 -translate-1/2 fa-caret-down"></i>
        </button>
        {showModal && (
          <div className='flex flex-col p-3 gap-1.5'>
            {(poison === 'individual' ? WORKOUTS[poison]: Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex)=>{
                return(
                  <button onClick={()=>{
                      updateMuscles(muscleGroup)
                  }} key={muscleGroupIndex} className={'hover:text-blue-400 duration-200 ' + (muscles.includes(muscleGroup) ? 'text-blue-400' : '')}>
                    <p className='uppercase font-semibold'>
                      {muscleGroup}
                    </p>
                  </button>
                )
            })}
          </div>
        )}
      </div>
      <Header index={'03'} title={'Become Juggernaut'} description={'Select your ultimate objective.'}/>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
        {Object.keys(SCHEMES).map((scheme, schemeIndex)=>{
         return(
            <button key={schemeIndex} onClick={()=>{setGoal(scheme)}} className={'bg-slate-950 border-[2px] py-3 px-4 rounded-lg duration-200  hover:border-blue-600 uppercase ' + (scheme === goal? 'border-blue-700' : 'border-blue-400')}>
              {scheme.replaceAll("_", " ")}
            </button>
          )
        })}
      </div>
      <Button func={updateWorkout} text={'Formulate'}/>
    </SectionWrapper>
  )
}
