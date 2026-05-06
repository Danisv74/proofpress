import React from 'react';
import Header from '../components/Header';
import StatCards from '../components/StatCards';
import PublishSection from '../components/PublishSection';
import HistoryTable from '../components/HistoryTable';

const Dashboard = () => {
  return (
    <div className="flex-1 p-10 max-w-7xl mx-auto w-full">
      <Header />

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Left Column - Main Action */}
        <div className="lg:col-span-8">
          <PublishSection />
        </div>

        {/* Right Column - Stats */}
        <div className="lg:col-span-4">
          <StatCards />
        </div>
      </div>

      {/* History Table */}
      <HistoryTable />
    </div>
  );
};

export default Dashboard;
