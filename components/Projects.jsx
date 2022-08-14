import React from 'react';
import ProjectItem from './ProjectItem';
import propertyImg from '/../assets/projects/property.jpg';
import cryptoImg from '/../assets/projects/crypto.jpg';
import netflixImg from '/../assets/projects/netflix.jpg';
import twitchmg from '/../assets/projects/twitch.jpg';

const projects = () => {
  return (
    <div className='w-full'>
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