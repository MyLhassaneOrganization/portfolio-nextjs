import React from 'react';
import ProjectItem from './ProjectItem';

const projects = () => {

let propertyImg = '/assets/projects/property.jpg';
let cryptoImg = '/assets/projects/crypto.jpg';
let netflixImg = '/assets/projects/netflix.jpg';
let twitchmg = '/assets/projects/twitch.jpg';

  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-6'>
        <p className='text-xl tracking-widest uppercase text--[#5651e5]'>Projects</p>
        <h2 className='py-4'>What I&apos; Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>

        <ProjectItem title='Property Finder' backgroundImg={propertyImg} projectUrl='/property' />
        <ProjectItem title='Property Finder' backgroundImg={cryptoImg} projectUrl='/crypto' />
        <ProjectItem title='Property Finder' backgroundImg={netflixImg} projectUrl='/netflix' />
        <ProjectItem title='Property Finder' backgroundImg={twitchmg} projectUrl='/twitch' />

        </div>
      </div>
    </div>
  )
}

export default projects