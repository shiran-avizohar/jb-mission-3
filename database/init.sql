-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Mar 17, 2025 at 03:03 PM
-- Server version: 9.2.0
-- PHP Version: 8.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `server_management`
--

-- --------------------------------------------------------

--
-- Table structure for table `servers`
--

CREATE TABLE `servers` (
  `server_id` char(36) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL,
  `server_name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `ip` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `Hosting Company` char(36) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL,
  `status` enum('Active','Inactive') COLLATE utf8mb3_unicode_ci NOT NULL,
  `creation_time` datetime NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `servers`
--

INSERT INTO `servers` (`server_id`, `server_name`, `ip`, `Hosting Company`, `status`, `creation_time`, `created_at`, `updated_at`) VALUES
('fbe523c6-0340-11f0-8f43-0242ac110002', 'ServerPulse', '2001:0db8:85a3:0000:0000:8a2e:0370:7334\r\n', 'e6877a79-0340-11f0-8f43-0242ac110002', 'Active', '2025-03-17 15:03:00', '2025-03-17 15:03:00', '2025-03-17 15:03:00'),
('fbe533c2-0340-11f0-8f43-0242ac110002', 'ServerCentral', '10.0.0.0 – 10.255.255.255\r\n', 'e68794cd-0340-11f0-8f43-0242ac110002', 'Inactive', '2025-03-17 15:03:00', '2025-03-17 15:03:00', '2025-03-17 15:03:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `servers`
--
ALTER TABLE `servers`
  ADD PRIMARY KEY (`server_id`),
  ADD KEY `Hosting Company` (`Hosting Company`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `servers`
--
ALTER TABLE `servers`
  ADD CONSTRAINT `servers_ibfk_1` FOREIGN KEY (`Hosting Company`) REFERENCES `companies` (`company_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
