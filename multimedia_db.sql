-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 31, 2022 at 08:51 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Database: `multimedia_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `application_settings`
--

CREATE TABLE `application_settings` (
  `ID` int(11) NOT NULL,
  `Application_Title` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `Office_Name` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `Abbreviations` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Email_Address` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `Phone` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `Favicon` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `Logo` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `Language` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Footer_Text` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `System_Footer_Text` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `TIN` varchar(20) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `application_settings`
--

INSERT INTO `application_settings` (`ID`, `Application_Title`, `Office_Name`, `Abbreviations`, `Email_Address`, `Phone`, `Favicon`, `Logo`, `Language`, `Footer_Text`, `System_Footer_Text`, `TIN`) VALUES
(1, 'Media Achive System', 'Dire Dawa Adminstration Communication Office', 'MAS', 'info@mas.local', '0915000000', '', '', 'amh', 'Media Achive System 1.0', '<a href=\"http://www.dgc.gov.et\" target=\"_blank\"> <b>Copyright © Property Mangement System 2021</b> </a>', '10000459999');

-- --------------------------------------------------------

--
-- Table structure for table `classification`
--

CREATE TABLE `classification` (
  `C_ID` int(11) NOT NULL,
  `Classification_Name` varchar(250) DEFAULT NULL,
  `Classification_Code` varchar(100) DEFAULT NULL,
  `Description` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `classification`
--

INSERT INTO `classification` (`C_ID`, `Classification_Name`, `Classification_Code`, `Description`) VALUES
(1, 'News', '001', 'News Casification'),
(3, 'Live', '002', 'Live');

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

CREATE TABLE `departments` (
  `ID` int(11) NOT NULL,
  `Offices_Name` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `Code` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `Offices_Type` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `Bureau` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `Description` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `departments`
--

INSERT INTO `departments` (`ID`, `Offices_Name`, `Code`, `Offices_Type`, `Bureau`, `Description`) VALUES
(1, 'ፕላንና ኢኮኖሚ', '', 'ጽ/ቤት', 'ገንዘብና ኢኮኖሚ ልማት ቢሮ', 'ዋና ስራ ሂደት'),
(2, 'የመንግስት ግዥና ንብረት ማስወገድ አገልግሎት', '', 'ጽ/ቤት', 'ገንዘብና ኢኮኖሚ ልማት ቢሮ', 'ዋና ስራ ሂደት'),
(3, 'የመንግስት ግዥና ንብረት አስተዳደር', '', 'ዳይሮክቶሬት', 'ገንዘብና ኢኮኖሚ ልማት ቢሮ', 'ዋና ስራ ሂደት'),
(4, 'የመንግስት ፋይናንስ አስተዳደር', '', 'ዳይሮክቶሬት', 'ገንዘብና ኢኮኖሚ ልማት ቢሮ', 'ዋና የስራ ሂደት'),
(5, 'የሲቪክ ማህበራት', '', 'ዳይሮክቶሬት', 'ገንዘብና ኢኮኖሚ ልማት ቢሮ', 'ዋና ስራ ሂደት'),
(6, 'ገንዘብና ኢኮኖሚ ልማት', '', 'ቢሮ', 'ገንዘብና ኢኮኖሚ ልማት ቢሮ', 'ዋና የስራ ሂደት'),
(7, 'የሰዉ ሀብት', '', 'ዳይሮክቶሬት', 'ገንዘብና ኢኮኖሚ ልማት ቢሮ', 'ደጋፊ ስራሂደት'),
(8, 'ግዥና ፋይናንስ ንብረት አስተዳደር', 'ግ/ፋ/ን/አ', 'ዳይሮክቶሬት', 'ገንዘብና ኢኮኖሚ ልማት ቢሮ', 'ደጋፊ ስራ ሂደት'),
(9, 'Invester Atraction Core Process', 'IACP', 'የስራ ሂደት', 'Trade Office', 'vdfsd sdfgsdfg Invester Atraction Core Process');

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `ID` int(11) NOT NULL,
  `First_Name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Middle_Name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Last_Name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Sex` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Job_Title` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Phone` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Email` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Moblie` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Address` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Department` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ID_Number` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Photo` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Building_Number` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Room_Number` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`ID`, `First_Name`, `Middle_Name`, `Last_Name`, `Sex`, `Job_Title`, `Phone`, `Email`, `Moblie`, `Address`, `Department`, `ID_Number`, `Photo`, `Building_Number`, `Room_Number`) VALUES
(1, 'Super', 'Admin', 'User', 'ወንድ', 'ዳይሬክተር', '', '', '', '', 'Admin', '', '108_copy2.JPG', '', ''),
(2, 'System', 'Admin', 'User', 'ወንድ', 'ፋይናንስ ኦፊስር', '', '', '', '', 'Admin', '', '016_copy1.jpg', '', ''),
(103, 'user', 'user', 'user', 'ወንድ', 'user', '092135685', '', '092135685', '', 'ግዥና ፋይናንስ ንብረት አስተዳደር', '123', NULL, '', ''),
(104, 'Tsega', 'Endasahw', 'Abate', 'ወንድ', 'Admin', '0912486048', 'tsd', '0912486048', 'Dire Dawa', 'Invester Atraction Core Process', 'AC/189/2014', 'nescafe-coffee3.jpg', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `multimedia`
--

CREATE TABLE `multimedia` (
  `M_ID` int(11) NOT NULL,
  `Code` varchar(250) NOT NULL,
  `Name` varchar(500) NOT NULL,
  `Description` text DEFAULT NULL,
  `Attachment` varchar(500) NOT NULL,
  `Recorde_Date` date DEFAULT NULL,
  `Size` float DEFAULT NULL,
  `Classification` varchar(250) NOT NULL,
  `Sub_Classification` varchar(250) NOT NULL,
  `Type` varchar(100) DEFAULT NULL,
  `Language` varchar(255) NOT NULL,
  `Video_Type` varchar(255) NOT NULL,
  `Recorde_By` varchar(250) NOT NULL,
  `upload_by` varchar(255) NOT NULL,
  `Uplaod_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `multimedia`
--

INSERT INTO `multimedia` (`M_ID`, `Code`, `Name`, `Description`, `Attachment`, `Recorde_Date`, `Size`, `Classification`, `Sub_Classification`, `Type`, `Language`, `Video_Type`, `Recorde_By`, `upload_by`, `Uplaod_date`) VALUES
(1, '001', 'First title Lorem ipsum dolor sit amet consectetur, adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus voluptatibus voluptatum assumenda eum quam repudiandae numquam consequuntur quas, accusamus cumque dicta odio ea quibusdam qui distinctio vero perspiciatis repellendus esse.', '1659072438Rocket_Launch_-_7284.mp4', '2022-07-03', 3401.81, '', 'Sport News', '.mp4', '', '', 'tsega', '', '2022-07-30 19:16:16'),
(10, '007', 'Arefa Hoy Day', '<p>des<br></p>', '1657718802andrea_logo.jpg', '2022-07-13', 4.17, 'Live', 'Holy day', '.jpg', '', '', 'Tsega', '', '2022-07-30 19:16:16'),
(9, '005', 'police', '<p>police<br></p>', '1657089127police_commission.jpg', '2022-07-06', 14.84, 'New', 'Event News', '.jpg', '', '', 'Miki', '', '2022-07-30 19:16:16'),
(6, '005', 'test 6', '<p>sdfs<br></p>', '1657017475diaspora3.PNG', NULL, 53.33, 'New', 'Event News', '.PNG', '', '', 'gjhgjm', '', '2022-07-30 19:16:16'),
(7, '006', 'sdfas', '<p>sdfs<br></p>', '1657017666world_billionaires_rich.jpg', NULL, 38.99, 'New', 'Event News', '.jpg', '', '', 'Ts', '', '2022-07-30 19:16:16'),
(8, '007', 'T', '<p>t </p>', '1657017801images_bg.jpg', '2022-07-05', 4.32, 'New', 'Event News', '.jpg', '', '', 't', '', '2022-07-30 19:16:16'),
(13, '0012', 'test', '<p>heloo duk</p>', '1659225770shutterstock_1523634989.png', '2022-07-31', 76.71, 'Live', 'Documetary', '.png', 'Amharic', 'Edited', 'Ashuu', '', '2022-07-31 01:12:51'),
(14, '00014\n', 'test ', '<p>\r\n\r\n\r\n\r\nLorem ipsum dolor sit amet consectetur adipiscing elit maecenas aenean accumsan curabitur, lobortis venenatis suscipit pellentesque class sem molestie metus augue senectus, aliquam nam et conubia nunc fringilla netus nibh praesent nullam. Hendrerit nostra quam id fringilla curae habitasse, aptent per habitant lobortis elementum ad, dictumst cursus sagittis odio volutpat.\r\n\r\n\r\n\r\n<br></p>', '', NULL, NULL, 'News', 'Holy day', NULL, 'Afaan Oromoo', 'RAW', 'Non qui non officia ', 'System Admin', '2022-07-31 09:19:56');

-- --------------------------------------------------------

--
-- Table structure for table `sub_classification`
--

CREATE TABLE `sub_classification` (
  `SC_ID` int(11) NOT NULL,
  `Sub_Classification_Name` varchar(250) DEFAULT NULL,
  `Sub_Classification_Code` varchar(100) DEFAULT NULL,
  `Classification` varchar(250) DEFAULT NULL,
  `Description` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sub_classification`
--

INSERT INTO `sub_classification` (`SC_ID`, `Sub_Classification_Name`, `Sub_Classification_Code`, `Classification`, `Description`) VALUES
(1, 'Sport News', '0001', 'News', 'News'),
(2, 'Event News', '002', 'News', 'Event News'),
(3, 'Holy day', '0005', 'Live', 'Holy day'),
(4, 'Documetary', '005', 'Live', 'Documetary');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `ID` int(11) NOT NULL,
  `Employee_ID` int(11) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Is_Active` varchar(3) NOT NULL COMMENT 'yes or no',
  `Password` text NOT NULL,
  `Access_Level` int(2) NOT NULL,
  `Created_Date` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`ID`, `Employee_ID`, `Email`, `Is_Active`, `Password`, `Access_Level`, `Created_Date`) VALUES
(1, 1, 'superadmin@sms.local', '1', '72ea13427794b1c76d080aa020a6f946', 0, '2019-06-27 20:05:24'),
(2, 2, 'sysadmin@sms.local', '1', '72ea13427794b1c76d080aa020a6f946', 0, '2022-02-05 10:07:01'),
(8, 102, 'mamush@sms.local', '1', 'e10adc3949ba59abbe56e057f20f883e', 2, '2022-07-04 18:42:45'),
(9, 101, 'ts@g.c', '1', '4297f44b13955235245b2497399d7a93', 3, '2022-07-04 19:08:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `application_settings`
--
ALTER TABLE `application_settings`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `classification`
--
ALTER TABLE `classification`
  ADD PRIMARY KEY (`C_ID`);

--
-- Indexes for table `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `Offices_Name` (`Offices_Name`),
  ADD KEY `Bureau` (`Bureau`),
  ADD KEY `Offices_Type` (`Offices_Type`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `Department_ID` (`Department`);

--
-- Indexes for table `multimedia`
--
ALTER TABLE `multimedia`
  ADD PRIMARY KEY (`M_ID`);

--
-- Indexes for table `sub_classification`
--
ALTER TABLE `sub_classification`
  ADD PRIMARY KEY (`SC_ID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `application_settings`
--
ALTER TABLE `application_settings`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `classification`
--
ALTER TABLE `classification`
  MODIFY `C_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `departments`
--
ALTER TABLE `departments`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=105;

--
-- AUTO_INCREMENT for table `multimedia`
--
ALTER TABLE `multimedia`
  MODIFY `M_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `sub_classification`
--
ALTER TABLE `sub_classification`
  MODIFY `SC_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;
