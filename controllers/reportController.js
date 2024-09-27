const Operation = require('../models/Opration');
const moment = require('moment'); // Install moment.js for date manipulation

const generateMISReport = async (req, res) => {
  try {
    // Fetch all operation data from the database
    const operations = await Operation.find();

    // Initialize metric objects
    const dailyMetrics = {};
    const weeklyMetrics = {};
    const monthlyMetrics = {};

    // Loop through each operation and categorize them into daily, weekly, and monthly metrics
    operations.forEach((operation) => {
      const createdAt = moment(operation.createdAt);
      
      // Daily metrics
      const day = createdAt.format('YYYY-MM-DD');
      if (!dailyMetrics[day]) {
        dailyMetrics[day] = { successCount: 0, errorCount: 0 };
      }
      if (operation.status === 'success') {
        dailyMetrics[day].successCount += 1;
      } else {
        dailyMetrics[day].errorCount += 1;
      }

      // Weekly metrics
      const week = createdAt.format('YYYY-WW'); // Week of the year
      if (!weeklyMetrics[week]) {
        weeklyMetrics[week] = { successCount: 0, errorCount: 0 };
      }
      if (operation.status === 'success') {
        weeklyMetrics[week].successCount += 1;
      } else {
        weeklyMetrics[week].errorCount += 1;
      }

      // Monthly metrics
      const month = createdAt.format('YYYY-MM');
      if (!monthlyMetrics[month]) {
        monthlyMetrics[month] = { successCount: 0, errorCount: 0 };
      }
      if (operation.status === 'success') {
        monthlyMetrics[month].successCount += 1;
      } else {
        monthlyMetrics[month].errorCount += 1;
      }
    });

    // Convert metrics objects into arrays
    const dailyMetricsArray = Object.keys(dailyMetrics).map((date) => ({
      date,
      ...dailyMetrics[date],
    }));

    const weeklyMetricsArray = Object.keys(weeklyMetrics).map((week) => ({
      week,
      ...weeklyMetrics[week],
    }));

    const monthlyMetricsArray = Object.keys(monthlyMetrics).map((month) => ({
      month,
      ...monthlyMetrics[month],
    }));

    // Respond with the metrics
    res.json({
      daily: dailyMetricsArray,
      weekly: weeklyMetricsArray,
      monthly: monthlyMetricsArray,
    });
  } catch (error) {
    console.error('Error fetching report metrics:', error);
    res.status(500).json({ error: 'Error fetching report metrics' });
  }
};

module.exports = { generateMISReport };
