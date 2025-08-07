
import { Button } from "@/components/ui/button"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AlertsPage() {
  return (
    <div className="min-h-screen bg-splash-light pt-24 pb-6">
      <div className="max-w-md mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Link href="/profile">
            <Button variant="ghost" size="sm" className="bg-white/50 backdrop-blur-sm hover:bg-white/70">
              <ArrowLeft size={20} />
            </Button>
          </Link>
          <h1 className="text-xl font-medium text-gray-900">Alerts & Notifications</h1>
          <div className="w-8"></div>
        </div>

        <GlassmorphicCard gradient="from-white/70 to-white/50">
          <CardHeader>
            <CardTitle className="text-gray-900">Notification Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">Push Notifications</h3>
                <p className="text-sm text-gray-600">Receive notifications about rewards and updates</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">Email Notifications</h3>
                <p className="text-sm text-gray-600">Get updates via email</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">Reward Alerts</h3>
                <p className="text-sm text-gray-600">Notify when new rewards are available</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">Ticket Expiry Alerts</h3>
                <p className="text-sm text-gray-600">Remind before tickets expire</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </GlassmorphicCard>
      </div>
    </div>
  )
}
