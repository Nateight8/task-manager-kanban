import { GetStaticProps, GetStaticPropsContext } from 'next';
import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import { useDispatch, useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Board, Boards, Column } from '@/utils/interface';
import { Box, List, ListItem, ListItemButton, ListItemText, Stack, Button, Toolbar, } from '@mui/material';
import Task from '@/components/Tasks/Task';
import { useAppSelector } from '@/redux/store';
import theme from '@/components/theme/theme';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
// import "swiper/css/pagination";


type Props = {
  // data: Boards
  index: number
}

function Home({ }: Props) {

  const store = useAppSelector((store) => {
    return (store.storeTasks)
  })

  return (
    <>
      {/* <Toolbar /> */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CssBaseline />

        <Box sx={{ position: "relative" }}>
          <Box sx={{ padding: { xs: "0.3rem", sm: "0.5rem" }, position: "fixed", inset: 0, top: 60 }}>


            <Typography variant="h6" sx={{ textTransform: "capitalize", color: "white" }} >
              {/* {boardData.name} */}
              project
            </Typography>
            <Swiper
              slidesPerView={1.3}
              spaceBetween={20}
              breakpoints={{
                640: {
                  slidesPerView: 1.8,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2.6,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3.2,
                  spaceBetween: 20,
                },
                1224: {
                  slidesPerView: 3.6,
                  spaceBetween: 20,
                },
              }}
              pagination={{
                clickable: true,
              }}
              // modules={[Pagination]}
              className="mySwiper"
              style={{ padding: "0.4rem", }}
            >

              {/* start here */}
              {store.columns.map((task: Column, idx: number) => {
                const { name, tasks } = task
                const todoBg = { background: "#49c4e5", height: "1rem", width: "1rem", borderRadius: "50%", margin: "0.5rem" }
                const doingBg = { background: "#8471f2", height: "1rem", width: "1rem", borderRadius: "50%", margin: "0.5rem" }
                const completeBg = { background: "#67e2ae", height: "1rem", width: "1rem", borderRadius: "50%", margin: "0.5rem" }
                return (

                  <SwiperSlide key={name} style={{ minHeight: "75vh" }}>
                    <Box>
                      <Stack direction="row" alignItems="center" sx={{ paddingBottom: "0.8rem" }}>
                        <Box sx={idx === 0 ? todoBg : idx === 1 ? doingBg : completeBg} />
                        <Typography variant="body1" sx={{ color: "#7D899C", letterSpacing: 1.5, fontWeight: 600, textTransform: "uppercase" }} >
                          {/* todo, doing, done and others */}
                          {name} ( {tasks.length} )
                        </Typography>
                      </Stack>

                      <List sx={{
                        width: "100%", background: "", padding: "0.5rem", height: "75vh", overflowY: "scroll",
                        "  &::-webkit-scrollbar": {
                          display: "none"
                        }

                      }}>
                        {

                          tasks.map((task) => {

                            return (
                              <Task key={task.title} task={task} />
                            )
                          })

                        }
                      </List>

                    </Box>

                  </SwiperSlide>


                )
              })}



              <SwiperSlide>
                <Box sx={{ paddingY: "3.7rem", height: "100vh" }}>
                  <Stack sx={{ background: "#21232d", height: "75vh" }}>
                    <Button variant="contained" sx={{ background: "#21232d", height: "100%" }}>
                      New Column
                    </Button>
                  </Stack>
                </Box>
              </SwiperSlide>

            </Swiper>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  )
}

export default Home



// export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {



//     const res = await fetch(`http://localhost:3500/boards`);
//     const data = await res.json();


//     return {
//         props: {
//             data,
//         }
//     }

// }