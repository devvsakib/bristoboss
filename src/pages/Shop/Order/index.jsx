import React, { useState } from 'react'
import Banner from '../../../components/Common/Banner'
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import Layout from '../../../Layout'
import useMenu from '../../../hooks/useMenu'
import Card from './Card'

const Order = () => {
  const [tabInd, setTabInd] = useState(0)
  const [tabValue, setTabValue] = useState(0)
  const [menu, setMenu] = useMenu()
  const offered = menu.filter(item => item.category === 'offered')
  const desserts = menu.filter(item => item.category === 'dessert')
  const pizza = menu.filter(item => item.category === 'pizza')
  const salads = menu.filter(item => item.category === 'salad')
  const soups = menu.filter(item => item.category === 'soup')
  const drinks = menu.filter(item => item.category === 'drinks')


  return (
    <div>
      <Banner dynImg={"/assets/shop/banner2.jpg"} title={"our shop"} tagline={"Would you like to try a dish?"} />
      <Layout>
        <div className='my-20'>
          <Tabs defaultIndex={tabInd} onSelect={(index) => { setTabInd(index); setTabValue(index) }}>
            <TabList className={"text-center border-none font-semibold flex gap-5 justify-center"}>
              <Tab className={`border-none outline-none cursor-pointer ${tabInd === tabValue ? "text-primary" : ""}`}>Salad</Tab>
              <Tab className={`border-none outline-none cursor-pointer ${tabInd === tabValue ? "text-primary" : ""}`}>Pizza</Tab>
              <Tab className={`border-none outline-none cursor-pointer ${tabInd === tabValue ? "text-primary" : ""}`}>Soup</Tab>
              <Tab className={`border-none outline-none cursor-pointer ${tabInd === tabValue ? "text-primary" : ""}`}>Dessert</Tab>
              <Tab className={`border-none outline-none cursor-pointer ${tabInd === tabValue ? "text-primary" : ""}`}>Drinks</Tab>
            </TabList>
            <TabPanel>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-10 my-10'>
                {salads.map((item, index) => (
                  <Card key={index} item={item} />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-10 my-10'>
                {pizza.map((item, index) => (
                  <Card key={index} item={item} />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-10 my-10'>
                {soups.map((item, index) => (
                  <Card key={index} item={item} />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-10 my-10'>
                {desserts.map((item, index) => (
                  <Card key={index} item={item} />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-10 my-10'>
                {drinks.map((item, index) => (
                  <Card key={index} item={item} />
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </Layout>
    </div >
  )
}

export default Order