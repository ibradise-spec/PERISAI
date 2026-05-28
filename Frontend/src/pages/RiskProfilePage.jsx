import { AiRecommendationsSection } from "../components/risk-profile/AiRecommendationsSection";
import { ConsistencyReminderSection } from "../components/risk-profile/ConsistencyReminderSection";
import { RiskFactorsSection } from "../components/risk-profile/RiskFactorsSection";
import { RiskOverviewSection } from "../components/risk-profile/RiskOverviewSection";
import { RiskTrendSection } from "../components/risk-profile/RiskTrendSection";

function RiskProfilePage() {
    return (
        <div className="min-h-screen bg-[#E5E7EB] p-6">

            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-[#0F172A]">
                    Risk Profile
                </h1>

                <p className="text-[#64748B] mt-1">
                    Your AI-generated health analysis
                </p>
            </div>

            {/* Main Content */}
            <div className="flex flex-col gap-6">

                {/* Risk Overview */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4">
                    <RiskOverviewSection />
                </div>

                {/* Risk Factors */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4">
                    <RiskFactorsSection />
                </div>

                {/* Risk Trend */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4">
                    <RiskTrendSection />
                </div>

                {/* AI Recommendations */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4">
                    <AiRecommendationsSection />
                </div>

                {/* Consistency Reminder */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4">
                    <ConsistencyReminderSection />
                </div>

            </div>
        </div>
    )
}

export default RiskProfilePage