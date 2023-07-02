import React from 'react';
import { useTable, useGlobalFilter, useSortBy } from 'react-table';
import './App.css';

const App = () => {
  const data = React.useMemo(
    () => [
      {id:1, name: 'Shree Bhola Yadav',fathername: 'Late Rambujhawan yadav',address: 'Madhiya, Gangaur',donation: '1,25,555/-'},
      {id:2,name: 'Shree Ramnandan Thakur',fathername: 'Late Maijan Thakur',address: 'Kamtaul, Gangaur',donation: '57,049/-'},
      {id:3, name: 'Shree Dr Om Pandit',fathername: 'Shree Rameshwar pandit',address: 'Gangaur',donation: '55,555/-'},
      {id:4,name: 'Shree Abhishek Kishore Yadav',fathername: 'Late Bajrangi Yadav',address: 'Pachgachhiya, Gangaur',donation: '51,055/-'},
      {id:5,name: 'Moshmat Kumari Devi',fathername: 'Late shiv Prasad',address: 'Gangaur',donation: '36,925/-'},
      {id:6,name: 'Moshmat Nayna Devi',fathername: 'Late Punyadeo Mishra',address: 'Ganagur',donation: '35,551/-'},
      {id:7, name: 'Shree Lal Kishore Ram',fathername: 'Shree Amiri Ram',address: 'Madhiya, Ganagur',donation: '35,551/-'},
      {id:8,name: 'Shree Rajdeo sah',fathername: 'Late Fakira sah',address: 'Gangaur',donation: '25,555/-',},
      {id:9,name: 'Shree Sanjay Yadav',fathername: 'Late Yogendra Yadav',address: 'Madhiya,Gangaur',donation: '25,055/-',},
      {id:10, name: 'Shree Ram Bahadur Mahto',fathername: 'Late Dilchan mahto',address: 'Gangaur',donation: '25,000/-',},
      {id:11, name: 'Shree Phudan Yadav',fathername: 'Late Matbar Yadav',address: 'Pachgachhiya, Gangaur',donation: '25,000/-',},
      {id:12, name: 'Shree Suryadeo mahto',fathername: 'Late bhagwani mahto',address: 'Gopalpur, Gangaur',donation: '21,000/-',},
      {id:13, name: 'Shree Sitaram Yadav',fathername: 'Late Pachu Yadav',address: 'Pansalwa, Gangaur',donation: '21,000/-',},
      {id:14, name: 'Shree Yugal Kishore Yadav',fathername: 'Late Bindeshwar Yadav',address: 'Madhiya, Gangaur',donation: '21,000/-',},
      {id:15, name: 'Shree Ram Preet Yadav',fathername: 'Shree Sonphi Yadav',address: 'Pachgachhiya, Gangaur',donation: '21,000/-',},
      {id:16, name: 'Shree Rambriksha Yadav',fathername: 'Late Sobhit Yadav',address: 'Kharhauri Tol, Gangaur',donation: '21,000/-',},
      {id:17, name: 'Shree Binda Prasad',fathername: 'Late Jhauli Mahato',address: 'Gangaur',donation: '20,000/-',},
      {id:18, name: 'Shree Ram Pravesh ram',fathername: 'Shree Anand Ram',address: 'Gangaur',donation: '17,075/-',},
      {id:19, name: 'Shree Sukesh Ram ',fathername: 'Shree Anand Ram',address: 'Gangaur',donation: '16,000/-',},
      {id:20, name: 'Shree Sudhir Kumar',fathername: 'Late RadheShyam Mahto',address: 'Gopalpur, Gangaur',donation: '15,555/-',},
      {id:21, name: 'Shree Ganesh Yadav',fathername: 'Shree Rajeshwar Yadav',address: 'Pachgachhiya, Gangaur',donation: '15,551/-',},
      {id:22, name: 'Shree Lakshman Yadav',fathername: 'Late Ram Sudrist Yadav',address: 'Pansalwa, Gangaur ',donation: '15,151/-',},
      {id:23, name: 'Shree Surendra Prasad',fathername: 'Late Biptu Mahto',address: 'Gangaur',donation: '15,051/-',},
      {id:24, name: 'Shree Ram Prabodh Sahu',fathername: 'Shree Bhadai Sahu',address: 'Gangaur',donation: '15,051/-',},
      {id:25, name: 'Shree Govind kumar',fathername: 'Tholai Yadav',address: 'Gangaur',donation: '15,051/-',},
      {id:26, name: 'Shree Ram Dayal Mishra',fathername: 'Late Parau Mishra',address: 'Gangaur',donation: '15,051/-',},
      {id:27, name: 'Shree Rakesh Kumar',fathername: 'Shree Sonelal Yadav',address: 'Gangaur',donation: '13,000/-',},
      {id:28, name: 'Shree Umesh Mahto',fathername: 'Shree Ram Sahay Mahto',address: 'Gangaur',donation: '12,551/-',},
      {id:29, name: 'Shree Ranjit Yadav',fathername: 'Shree Sanichar Yadav',address: 'Gangaur',donation: '12,551',},
      {id:30, name: 'Shree Ram Bharosh Mahto',fathername: 'Shree Chandeshwar Mahto',address: 'Gangaur',donation: '12,551/-',},
      {id:31, name: 'Shree Satyanarayan Yadav',fathername: 'Late Rambaran Yadav',address: 'Pansalwa, Gangaur',donation: '12,500/-',},
      {id:32, name: 'Shree Satyanarayan Mahto',fathername: 'Late Babue Lal Mahto',address: 'Ganagur',donation: '12,500/-',},
      {id:33, name: 'Shree Naresh Yadav',fathername: 'Late Ramhit Yadav ',address: 'Bhikhwa, Ganagur',donation: '12,500/-',},
      {id:34, name: 'Shree Gopal Mahto ',fathername: 'Late Yogi Mahto',address: 'Gangaur',donation: '12,500/-',},
      {id:35, name: 'Shree Umesh Yadav',fathername: 'Late Uttim Lal Yadav',address: 'Gangaur',donation: '11,555/-',},
      {id:36, name: 'Shree HareKrishna Yadav',fathername: 'Late Sitaram Yadav',address: 'Gangaur',donation: '11,551/-',},
      {id:37, name: 'Shree Ram Pukar Prasad',fathername: 'Late Ram Kishun Prasad',address: 'Gopalpur, Gangaur',donation: '11,151/-',},
      {id:38, name: 'Shree Ram Dinesh Mishra',fathername: 'Late Ramcharitra Mishra',address: 'Gangaur',donation: '11,151/-',},
      {id:39, name: 'Shree Shiv Kumar yadav',fathername: 'Late Santkrishna Yadav ',address: 'Pansalwa, Gangaur',donation: '11,051/-',},
      {id:40, name: 'Shree Devnandan Mahto',fathername: 'Late Genai Mahto',address: 'Gangaur',donation: '11,051/-',},
      {id:41, name: 'Shree Rajilal Yadav',fathername: 'Late dashai Yadav',address: 'Gangaur',donation: '11,051',},
      {id:42, name: 'Moshmat Shail Kumari Devi',fathername: 'Late Ramchandra Mishra',address: 'Gangaur',donation: '11,051/-',},
      {id:43, name: 'Shree Ram Ratan Prasad',fathername: 'Late Harivansh Mahto',address: 'Gangaur',donation: '11,051',},
      {id:44, name: 'Shree Babue Lal Sahu',fathername: 'Shree Bhadai Sahu',address: 'Gangaur',donation: '11,051/-',},
      {id:45, name: 'Shreemati Rampari devi',fathername: 'Shree Ramnandan Thakur',address: 'Kamtaul, Gangaur',donation: '11,051/-',},
      {id:46, name: 'Shree Shatish Sharma',fathername: 'Shree Suresh Sharma',address: 'gangaur',donation: '11,051/-',},
      {id:47, name: 'Shree Ramnandan Yadav',fathername: 'Late Subadh Yadav',address: 'Gangaur',donation: '11,050/-',},
      {id:48, name: 'Shree Shyam Mahto',fathername: 'Late Ramchandra Mahto',address: 'Ganagur',donation: '11,005/-',},
      {id:49, name: 'Shree Ram Lalit Sahu',fathername: 'Shree Rajendra Sahu',address: 'Gangaur',donation: '11,001/-',},
      {id:50, name: 'Shree vijay Yadav',fathername: 'Late Rambriksha Yadav',address: 'Gangaur',donation: '11,000/-',},
      {id:51, name: 'Shree Harishchandra prasad Yadav',fathername: 'Late Jadish Yadav',address: 'Manoharpur, Gangaur',donation: '10,800/-',},
      {id:52, name: 'Shree Shubhanshu Shubham',fathername: 'Shree Binod Kumar Yadav',address: 'Gangaur',donation: '10,551/-',},
      {id:53, name: 'Shree Vimal Mahto',fathername: 'Shree Kailash prasad kushwaha',address: 'Gangaur',donation: '10,500/-',},
      {id:54, name: 'Shree Lalan Prasad Kushwaha',fathername: 'Shree Kailash prasad kushwaha',address: 'Ganagur',donation: '10,500/-',},
      {id:55, name: 'Shree Shankar Prasad',fathername: 'Late Jahauli Mahto',address: 'Gangaur',donation: '10,051/-',},
      {id:56, name: 'Shree Kailash Prasad Verma',fathername: 'Late Jahauli Mahto',address: 'Ganagur',donation: '10,000/-',},
      {id:57, name: 'Shree Ram Rijhan Prasad',fathername: 'Late Sobhit Mahto',address: 'Gangaur',donation: '8,000/-',},
      {id:58, name: 'Shree Liladhar Sahu',fathername: 'Shree Bhadai sahu',address: 'Ganagaur',donation: '7,551/-',},
      {id:59, name: 'Shree Ramkripal Mishra',fathername: 'Late Ramvilash Mishra ',address: 'Ganagur',donation: '7,551/-',},
      {id:60, name: 'Shree Saukhi Yadav',fathername: 'Late Ram Lochan Yadav',address: 'Gangaur',donation: '7,550/-',},
      {id:61, name: 'Shree Pappu kumar Yadav',fathername: 'Shree Ram Swarath Yadav',address: 'Gangaur',donation: '7,151/-',},
      {id:62, name: 'Shree Sanjeev Sah',fathername: 'Shree Shankar sah',address: 'Gangaur',donation: '7,051/-',},
      {id:63, name: 'Shree Sanjay Yadav',fathername: 'Shree Ramhit Yadav',address: 'Gangaur',donation: '6,551/-',},
      {id:64, name: 'Shree Shivnath Mahto',fathername: 'Shree Rambahadur Mahto',address: 'Gangaur',donation: '6,551/-',},
      {id:65, name: 'Shree Sandeep Kumar Mahto',fathername: 'Shree Hajari Mahto',address: 'Gangaur',donation: '6,551/-',},
      {id:66, name: 'Shree Vinay Kumar',fathername: 'Shree Ram Rantan Mahto',address: 'Gnagaur',donation: '6,501/-',},
      {id:67, name: 'Shree Bhogendra Mahto',fathername: 'Late Revi Mahto',address: 'Gangaur',donation: '6,251/-',},
      {id:68, name: 'Shree Sonfi Yadav',fathername: 'Late Uchit Yadav',address: 'Gangaur',donation: '6,161/-',},
      {id:69, name: 'Shree Jagganath Mahto ',fathername: 'Shree Ram bahadur Mahto',address: 'Gangaur',donation: '6,151/-',},
      {id:70, name: 'Shree Birendra Mahto',fathername: 'Shree Bhaglu Mahto',address: 'Gangaur',donation: '6,151/-',},
      {id:71, name: 'Shree Ganesh Mahto',fathername: 'Late Kanhai Mahto',address: 'Gangaur',donation: '6,151/-',},
      {id:72, name: 'Shree Damodar Prasad',fathername: 'Late Jagdeo Sah',address: 'Gangaur',donation: '6,105/-',},
      {id:73, name: 'Shre Shivchandra Mahto',fathername: 'Late Makeshwar Mahto',address: 'Gangaur',donation: '6,101/-',},
      {id:74, name: 'Shree Durbal Yadav',fathername: 'Late Munai Yadav',address: 'Gangaur',donation: '6,051/-',},
      {id:75, name: 'Shree Ram Sagar Mahto',fathername: 'Late Faudar Mahto',address: 'Gangaur',donation: '6,051/-',},
      {id:76, name: 'Shree Jeebachh Mishra ',fathername: 'Late Rameshwar Mishra',address: 'Gangaur',donation: '6,051/-',},
      {id:77, name: 'Shree Arun Yadav',fathername: 'Shree Bindeshwar Yadav',address: 'Gangaur',donation: '6,000/-',},
      {id:78, name: 'Shreemati Vina devi ',fathername: 'Shree Rajnandan Yadav',address: 'Gangaur',donation: '5,671/-',},
      {id:79, name: 'Shree Devendra Yadav',fathername: 'shree Rajendra yadav',address: 'Gangaur',donation: '5,651/-',},
      {id:80, name: 'Shree Lakshman Yadav',fathername: 'Late Dukhi Yadav',address: 'Gangaur',donation: '5,651/-',},
      {id:81, name: 'Moshmat Kalawati Devi',fathername: 'Late Ram Sevak Thakur',address: 'Gangaur',donation: '5,601/-',},
      {id:82, name: 'Shree Moti yadav',fathername: 'Late Devas Yadav',address: 'Pachgachhiya, Gangaur',donation: '5,555/-',},
      {id:83, name: 'Shree Ram Snehi Yadav',fathername: 'Shree sone Yadav',address: 'Gangaur',donation: '5,555/-',},
      {id:84, name: 'Shree Vijay Kumar Mahto',fathername: 'Late Sogarath Mahto',address: 'Gangaur',donation: '5,555/-',},
      {id:85, name: 'Shree Ashok Kumar Mishra',fathername: 'Late Ramlakshan Mishra',address: 'Gangaur',donation: '5,555/-',},
      {id:86, name: 'Shree Ajaya Mahto',fathername: 'Late Anand Mahto',address: 'Gangaur',donation: '5,555/-',},
      {id:87, name: 'Shree Hitlal Mahto',fathername: 'Late Janak Mahto',address: 'Gangaur',donation: '5,555/-',},
      {id:88, name: 'Shree Ram Kshatri Mahto',fathername: 'late Raudi Mahto',address: 'Gangaur',donation: '5,555/-',},
      {id:89, name: 'Shree Bhogendra Mahto',fathername: 'Late Ram Lalit Mahto',address: 'Gangaur',donation: '5,555/-',},
      {id:90, name: 'Shree Ashok Kumar Mahto',fathername: 'Late rajdeo mahto',address: 'Gangaur',donation: '5,555/-',},
      {id:91, name: 'Shree Ramprit Mahto',fathername: 'Late Gonar Mahto',address: 'Gangaur',donation: '5,555/-',},
      {id:92, name: 'Shree Satyanarayan Yadav',fathername: 'Rtd. Rambhajan Yadav',address: 'Pachgachhiya, Gangaur',donation: '5,555/-',},
      {id:93, name: 'Shree Ramawatar yadav',fathername: 'Late Chitlal yadav ',address: 'Gangaur',donation: '5,555/-',},
      {id:94, name: 'Shree Arun Ram',fathername: 'Late Vishnu Ram',address: 'Gangaur',donation: '5,551/-',},
      {id:95, name: 'Shree Ram Prabodh yadav',fathername: 'Shree Deeplal Yadav',address: 'Pachgachhiya, Gangaur',donation: '5,551',},
      {id:96, name: 'Shree Devchandra Mahto',fathername: 'late Biltu Mahto',address: 'Gangaur',donation: '5,551/-',},
      {id:97, name: 'Shree Rambalak Prasad',fathername: 'Late Biltu Mahto',address: 'Gangaur',donation: '5,551/-',},
      {id:98, name: 'Shree Ranjit Kumar yadav',fathername: 'Late Ramchandra Yadav',address: 'Manoharpur, Gangaur',donation: '5,525/-',},
      {id:99, name: 'Shree Akhileshwar Yadav',fathername: 'Late Braun Yadav',address: 'Madhiya,Basopatti,Gangaur',donation: '5,525/-',},
      {id:100, name: 'Shree Rajnandan Mahto',fathername: 'Late Chulhai Mahto',address: 'Gangaur',donation: '5,505/-',},
      {id:101, name: 'Shree Awadhlal Mahto',fathername: 'Late Mahanth Mahto',address: 'Gangaur',donation: '5,505/-',},
      {id:102, name: 'Shree Ram Dayal Yadav',fathername: 'Late Gudri Yadav',address: 'Pachgachhiya,Gangaur',donation: '5,501/-',},
      {id:103, name: 'Shree Rambali Yadav',fathername: 'Late Uchit Yadav ',address: 'Gangaur',donation: '5,501/-',},
      {id:104, name: 'Shree Jeebachh Yadav',fathername: 'Shree Siyasharan Yadav',address: 'Gangaur',donation: '5,501/-',},
      {id:105, name: 'Shree Ravi Yadav',fathername: 'Late Ramnath Yadav',address: 'Gangaur',donation: '5,501/-',},
      {id:106, name: 'Shreemati Vimal Devi',fathername: 'Shree Lakshman Yadav',address: 'Ganagur',donation: '5,501/-',},
      {id:107, name: 'Shree Rambalak sah ',fathername: 'Late Kishori sah ',address: 'Gangaur',donation: '5,500/-',},
      {id:108, name: 'Shree Ram yadav',fathername: 'Late Dukhi Yadav',address: 'Gangaur',donation: '5,251/-',},
      {id:109, name: 'Shree DevNarayan Yadav',fathername: 'Late Rambhajan Yadav',address: 'Pachgachhiya, Gangaur',donation: '5,251/-',},
      {id:110, name: 'Shree Pappu Kumar Mishra',fathername: 'Shree Ramprabodh Mishra',address: 'Gangaur',donation: '5,202/-',},
      {id:111, name: 'Shree Vedehi Mishra ',fathername: 'Late Rameshwar Mishra',address: 'Gangaur',donation: '5,251/-',},
      {id:112, name: 'Shree Satyendra Yadav',fathername: 'Late Rambaran Yadav',address: 'Pansalwa,Gangaur',donation: '5,151/-',},
      {id:113, name: 'Shree Rambriksha Yadav',fathername: 'Late Ramsharan yadav',address: 'Madhiya, Gangaur',donation: '5,151/-',},
      {id:114, name: 'Shree Ganesh Yadav',fathername: 'Late Shankar Yadav',address: 'Madhiya, Gangaur',donation: '5.151/-',},
      {id:115, name: 'Shree Rajdeo Yadav',fathername: 'Late Ramlakhan Yadav',address: 'Pachgachhiya, Gangaur',donation: '5,151/-',},
      {id:116, name: 'Shree Ashok kumar yadav',fathername: 'Shree Pritam Yadav',address: 'Kharhauri Tol, Gangaur',donation: '5,151/-',},
      {id:117, name: 'Shree Lakshmi Yadav',fathername: 'Late kunai Yadav',address: 'Kharhauri Tol,Gangaur',donation: '5,151/-',},
      {id:118, name: 'Shree Buni Yadav',fathername: 'Late Ghogharaj Yadav',address: 'Kharhauri Tol,Gangaur',donation: '5,151/-',},
      {id:119, name: 'Shree Rambriksha yadav',fathername: 'Late Ghogharaj Yadav',address: 'Kharhauri Tol,Gangaur',donation: '5,151/-',},
      {id:120, name: 'Shree Ramekbal sahu',fathername: 'late Ramcharitra sahu',address: 'Gangaur',donation: '5,151/-',},
      {id:121, name: 'shree Naresh sah',fathername: 'Late Yadunandan sah',address: 'Gangaur',donation: '5,151/-',},
      {id:122, name: 'Shree Ram Ishwar Yadav',fathername: 'Shree Sone Yadav',address: 'Gangaur',donation: '5,151/-',},
      {id:123, name: 'Shree Chandan Mahato',fathername: 'Shree Shivji Mahto',address: 'Gangaur',donation: '5,151/-',},
      {id:124, name: 'Shree Rajendra Sahu',fathername: 'Late Jhapsi sahu',address: 'Gangaur',donation: '5,151/-',},
      {id:125, name: 'Shree Ram Dinesh Yadav',fathername: 'Shree Bindeshwar Yadav',address: 'Gangaur',donation: '5,151/-',},
      {id:126, name: 'Shree Halkhori Yadav',fathername: 'Late Gubad Yadav',address: 'Gangaur',donation: '5,151/-',},
      {id:127, name: 'Shree Dukhran Yadav',fathername: 'Late Pragash Yadav',address: 'Gangaur',donation: '5,151/-',},
      {id:128, name: 'Shree Ramjeevan Yadav',fathername: 'Late Mahajan yadav', address: 'Gangaur',donation: '5,151/-',},
      {id:129, name: 'Shree Ranjit Sahu',fathername: 'Shree Upendra Sahu',address: 'Gangaur',donation: '5,151/-',},
      {id:130, name: 'Shree Manoj Das',fathername: 'Shree Jeebachh Das',address: 'Gangaur',donation: '5,151/-',},
      {id:131, name: 'Shree Ranjit sah ',fathername: 'Shree Krishnadev sah',address: 'Gangaur',donation: '5,151/-',},
      {id:132, name: 'Shree Fekan Mahto',fathername: 'Late Rajendra Mahto',address: 'Gangaur',donation: '5,151/-',},
      {id:133, name: 'Shree ramjeevan Mahto',fathername: 'late Jaeelal Mahto',address: 'Gangaur',donation: '5,151/-',},
      {id:134, name: 'Shree saroj Mahto',fathername: 'Shree Paraoo Mahto',address: 'Gangaur',donation: '5,151/-',},
      {id:135, name: 'Shree Rajeshwar Mahto',fathername: 'Late Kanhai Mahto',address: 'Gangaur',donation: '5,151/-',},
      {id:136, name: 'Shree Bharat Yadav',fathername: 'Late Sudrishta Yadav',address: 'Gangaur',donation: '5,151/-',},
      {id:137, name: 'Shree Doshik Das',fathername: 'Late Sahedev Das',address: 'Gangaur',donation: '5,151/-',},
      {id:138, name: 'Shree Rambaran mahto',fathername: 'Late Damodar Mahto',address: 'Gangaur',donation: '5,151/-',},
      {id:139, name: 'Shree Jagdish Mahto',fathername: 'Late Dukhai Mahto',address: 'Gangaur',donation: '5,150/-',},
      {id:140, name: 'Shree Dinesh Mahto',fathername: 'Shree Kamal Mahto',address: 'Gangaur',donation: '5,150/-',},
      {id:141, name: 'Shree Rambabu yadav' ,fathername: 'Late Ramvilash Yadav',address: 'Gangaur',donation: '5,150/-',},
      {id:142, name: 'Shree Chaudhry Yadav',fathername: 'Late Ramsagar Yadav',address: 'Madhiya, Gangaur',donation: '5,105/-',},
      {id:143, name: 'Shree Jagdish Ram ',fathername: 'Shree Tetar Ram',address: 'Madhiya, Gangaur',donation: '5,101/-',},
      {id:144, name: 'Shree Mahesh Yadav',fathername: 'Shree Ramvriksha yadav',address: 'Pachgachiya, Gangaur',donation: '5,001/-',},
      {id:145, name: 'Shree Suresh Yadav',fathername: 'Shree Rajeshwar Yadav',address: 'Pachgachiya, Gangaur',donation: '5,051/-',},
      {id:146, name: 'Shree Lal Yadav',fathername: 'Shree Narayan Yadav',address: 'Pachgachiya, Gangaur',donation: '5,100/-',},
      {id:147, name: 'Shree Gulab Yadav',fathername: 'Late Suraj Yadav',address: 'Pachgachiya, Gangaur',donation: '5,100/-',},
      {id:148, name: 'Shree Shivshankar Yadav',fathername: 'Late Udchit Yadav',address: 'Pachgachiya, Gangaur',donation: '5,101/-',},
      {id:149, name: 'Shree Vikaru Yadav',fathername: 'Late Ramcharitra Yadav',address: 'Gangaur',donation: '5,101/-',},
      {id:150, name: 'Shree Devchandra Mahto',fathername: 'Late Dukhai Mahto',address: 'Gangaur',donation: '5,101/-',},
      {id:151, name: 'Shree Shayam Mahto',fathername: 'Late Genai Mahto',address: 'Gangaur',donation: '5,101/-',},
      {id:152, name: 'Shree Shyam Yadav',fathername: 'Late Chhotu yadav',address: 'Gangaur',donation: '5,100/-',},
      {id:153, name: 'Shree Deepak sah',fathername: 'Shree Jhagdu Sah',address: 'Gangaur',donation: '5,101/-',},
      {id:154, name: 'Shree Dhaneshwar Mahto',fathername: 'Shree Parichhan Mahto',address: 'Ganagur',donation: '5,111/-',},
      {id:155, name: 'Shree Bhola Sharma',fathername: 'Shree Sonfi Sharma',address: 'Gangaur',donation: '5,101/-',},
      {id:156, name: 'Shree Sanjay Mahto',fathername: 'Shree Ramdev Mahto',address: 'Gangaur',donation: '5,101/-',},
      {id:157, name: 'Shree Naveen Yadav',fathername: 'Late Lakshaman Yadav',address: 'Gangaur',donation: '5,100/-',},
      {id:158, name: 'Shree Chandeshwar Yadav',fathername: 'Shree Ramchandra yadav',address: 'Gangaur',donation: '5,101/-',},
      {id:159, name: 'Shree Tejnarayan Thakur',fathername: 'Late Swaroop Thankur',address: 'Gangaur',donation: '5,051/-',},
      {id:160, name: 'Shree Gugli Yadav',fathername: 'Late Uchit Yadav',address: 'Gangaur',donation: '5,051/-',},
      {id:161, name: 'Moshmat Pukari Devi',fathername: 'Late Kunai Mishra',address: 'Gangaur',donation: '5,100/-',},
      {id:162, name: 'Shree Ramudar Mishra',fathername: 'Late Sone Mishra',address: 'Gangaur',donation: '5,101/-',},
      {id:163, name: 'Shree Rampavitra Mishra',fathername: 'Late Jagdeep Mishra',address: 'Gangaur',donation: '5,112/-',},
      {id:164, name: 'Shree Ganga prasad Mishra',fathername: 'Late Ramvilash Mishra',address: 'Gangaur',donation: '5,101/-',},
      {id:165, name: 'Shree Umesh Sahu',fathername: 'Shree Jagganath sahu',address: 'Gangaur',donation: '5,051/-',},
      {id:166, name: 'Shree Ramsagar Mahto ',fathername: 'Late Bhikham Mahto',address: 'Gangaur',donation: '5,051/-',},
      {id:167, name: 'Shree Ramdev Mahto',fathername: 'Late Bhikham Mahto',address: 'Gangaur',donation: '5,051/-',},
      {id:168, name: 'Shree Sitaram Mahto',fathername: 'Late Rambriksha Mahto ',address: 'Gangaur',donation: '5,100/-',},
      {id:169, name: 'Shree Hari Mahto',fathername: 'Shree Bhola Mahto',address: 'Gangaur',donation: '5,051/-',},
      {id:170, name: 'Shree Shiv Prasad Mahto',fathername: 'Late Biptu Mahto',address: 'Gangaur',donation: '5,101/-',},
      {id:171, name: 'Shree Lalbabu Mahto',fathername: 'Shree Kamaldev Mahto',address: 'Gangaur',donation: '5,101/-',},
      {id:172, name: 'Shree Ramsevak Mahto',fathername: 'Late Sone Mahto',address: 'Gangaur',donation: '5,051/-',},
      {id:173, name: 'Shree Sanjay sah',fathername: 'Late Ramji Sah',address: 'Gangaur',donation: '5,100/-',},
      {id:174, name: 'Shree Vinod Yadav',fathername: 'Late Yogi Yadav',address: 'Pansalwa, Gangaur',donation: '5,100/-',},
      {id:175, name: 'Shree Vimlesh Yadav',fathername: 'Late Jagganath Yadav',address: 'Pansalwa, Gangaur',donation: '5,100/-',},
      {id:176, name: 'Shree Shushil Yadav',fathername: 'Late Shukadev Yadav',address: 'Pansalwa, Gangaur',donation: '5,055/-',},
      {id:177, name: 'Shree Dinesh Yadav',fathername: 'Shree Rajeshwar Yadav',address: 'Pachgachhiya, Gangaur',donation: '5,100/-',},
      {id:178, name: 'Shree Ram padarath Yadav',fathername: 'Late Lalsingh Yadav',address: 'Gangaur',donation: '5,101/-',},
      {id:179, name: 'Shree Suresh Sah',fathername: 'Shree Yogendra sah',address: 'Gangaur',donation: '5,101/-',},
      {id:180, name: 'Shree Umashankar Sahu',fathername: 'Shree Chandeshwar sahu',address: 'Gangaur',donation: '5,101/-',},
      {id:181, name: 'Shree Mahesh Mahto',fathername: 'Shree Ram Sahay Mahto',address: 'Gangaur',donation: '5,101/-',},
      {id:182, name: 'Shree Bechan Mahto',fathername: 'Late Birju mahto',address: 'Gangaur',donation: '5,105/-',},
      {id:183, name: 'Shree Khelwan Mahto',fathername: 'Late Visholal Mahto',address: 'Gangaur',donation: '5,101/-',},
      {id:184, name: 'Shree Indal Yadav',fathername: 'Shree Rajdev Yadav',address: 'Gangaur',donation: '5,100/-',},
      {id:185, name: 'Shree Prabodh Mahto ',fathername: 'Shree Khelawan Mahto',address: 'Gangaur',donation: '5,100/-',},
      {id:186, name: 'Shree Parmeshwar Mahto',fathername: 'Late Dukha Mahto',address: 'Gangaur',donation: '5,100/-',},
      {id:187, name: 'Shree Shyam Yadav',fathername: 'Late Preetam Yadav',address: 'Gangaur',donation: '5,051/-',},
      {id:188, name: 'Shree Tapeshwar Yadav',fathername: 'Late Matwar yadav',address: 'Gangaur',donation: '5,101/-',},
      {id:189, name: 'Shree Mahendra Yadav',fathername: 'Late Gugai Yadav',address: 'Gangaur',donation: '5,100/-',},
      {id:190, name: 'Shree Vijay Sahu',fathername: 'Shree Ramsevak Sahu',address: 'Gangaur',donation: '5,101/-',},
      {id:191, name: 'Shree Vinay Bihari Sharma',fathername: 'Late Bhola Thakur ',address: 'Gangaur',donation: '5,101/-',},
      {id:192, name: 'Shree Rajnandan Mahto',fathername: 'Late Genai Mahto',address: 'Gangaur',donation: '5,100/-',},
      {id:193, name: 'Shree RamShresth Yadav',fathername: 'Late Deep Yadav',address: 'Madhiya, Gangaur',donation: '5,111/-',},
      {id:194, name: 'Shree Dileep sahu',fathername: 'Late Parikshan Sahu',address: 'Gangaur',donation: '5,051/-',},
      {id:195, name: 'Shree Bhagnarayan Mahto',fathername: 'Late Dasai Mahto',address: 'Gangaur',donation: '5,051/-',},
      {id:196, name: 'Shree Swarath Yadav',fathername: 'Shree Arjun Yadav',address: 'Gangaur',donation: '5,001/-',},
      {id:197, name: 'Shree Chhote Yadav',fathername: 'Shree Arjun Yadav',address: 'Gangaur',donation: '5,001/-',},
      {id:198, name: 'Shree Naresh Yadav',fathername: 'Shree Jagdish Yadav',address: 'Pachgachhiya, Gangaur',donation: '5,000/-',},
      {id:199, name: 'Shree vinod yadav',fathername: 'Shree Lakshmi Yadav',address: 'Pachgachhiya, Gangaur',donation: '5,000/-',},
      {id:200, name: 'Shree Ajay Yadav',fathername: 'Late Yogendra Yadav',address: 'Gangaur',donation: '5,000/-',},
      {id:201, name: 'Shree Ram Pravesh Sahu',fathername: 'Shree Kari Sahu',address: 'Gangaur',donation: '5,000/-',},
      {id:202, name: 'Shree Ram baran Yadav',fathername: 'Late Ram Gulam Yadav',address: 'Gangaur',donation: '5,000/-',},
      {id:203, name: 'Shree Naresh Safi',fathername: 'Late Lattu Safi',address: 'Gangaur',donation: '5,005/-',},
      {id:204, name: 'Shree Rajesh Thakur',fathername: 'Shree Surendra Thakur',address: 'Gangaur',donation: '5,001/-',},
      {id:205, name: 'Shree Vinod Mahto',fathername: 'Late Chandar mahto',address: 'Gangaur',donation: '5,000/-',},
      {id:206, name: 'Shree Prof Rajnandan Yadav',fathername: 'Late Rameshwar Yadav',address: 'Pansalwa, Gangaur',donation: '5,000/-',},
      {id:207, name: 'Shree Ramnandan Yadav',fathername: 'Late Rameshwar Yadav',address: 'Pansalwa, Gangaur',donation: '5,000/-',},
      {id:208, name: 'Shree Krishna Yadav',fathername: 'Late Rameshwar Yadav',address: 'Pansalwa, Gangaur',donation: '5,000/-',},
      {id:209, name: 'Shree Devnandan Yadav',fathername: 'Late Rameshwar Yadav',address: 'Pansalwa, Gangaur',donation: '5,000/-',},
      {id:210, name: 'Shree Ayush Kumar',fathername: 'Shree Akhileshwar Yadav',address: 'Madhiya, Basopatti, Gangaur',donation: '5000/-',},





      // Add more data as needed
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'No.',
        accessor: 'id',
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: "Father's Name/ Husband's Name",
        accessor: 'fathername',
      },
      {
        Header: 'Address',
        accessor: 'address',
      },
      {
        Header: 'Donation',
        accessor: 'donation',
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy);

  const { globalFilter } = state;

  return (
    <div className="App">
    <div  style={{
      fontWeight: 'bold',
      fontSize: '15px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '20px' 
    }}>श्री श्री 108 श्री दुर्गा मंदिर गंगौर के निर्माण में सहयोग कर्ताओं की सूची </div>
    <div>
    </div>
      <div className="filter-container">
        <input
          className="filter-input"
          value={globalFilter || ''}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
        />
      </div>
      <table {...getTableProps()} className="mobile-table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={
                    column.isSorted
                      ? column.isSortedDesc
                        ? 'sort-desc'
                        : 'sort-asc'
                      : ''
                  }
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#f0f0f0' }}
              >
                {row.cells.map((cell, j) => (
                  <td
                    {...cell.getCellProps()}
                    className={j === 0 ? 'serial-no' : ''}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div style={{
        fontWeight: 'bold',
        fontSize: '15px',
        display: 'flex',
        alignItems: 'left',
        justifyContent: 'right',
        marginTop: '20px' ,
        marginRight:'100px'
      }}>अध्यक्ष : श्री भोला यादव </div>
    </div>
  );
};

export default App;
