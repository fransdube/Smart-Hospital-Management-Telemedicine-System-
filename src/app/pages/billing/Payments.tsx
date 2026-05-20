import { CreditCard, Smartphone, DollarSign } from "lucide-react";

export default function Payments() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Make Payment</h1>
        <p className="text-slate-600 mt-2">Choose your payment method</p>
      </div>

      <div className="bg-white p-8 rounded-xl border border-slate-200">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Payment Summary</h2>
          <div className="p-4 bg-slate-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-600">Consultation Fee</span>
              <span className="font-semibold text-slate-900">KES 5,000</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-600">Service Charge</span>
              <span className="font-semibold text-slate-900">KES 100</span>
            </div>
            <div className="border-t border-slate-300 mt-3 pt-3 flex items-center justify-between">
              <span className="text-lg font-bold text-slate-900">Total Amount</span>
              <span className="text-2xl font-bold text-blue-600">KES 5,100</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Select Payment Method</h2>

          <label className="relative block">
            <input type="radio" name="payment" className="peer sr-only" defaultChecked />
            <div className="p-6 border-2 border-slate-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:bg-blue-50 hover:border-slate-300 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">M-Pesa</h3>
                  <p className="text-sm text-slate-600">Pay using M-Pesa mobile money</p>
                </div>
              </div>
            </div>
          </label>

          <label className="relative block">
            <input type="radio" name="payment" className="peer sr-only" />
            <div className="p-6 border-2 border-slate-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:bg-blue-50 hover:border-slate-300 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Card Payment</h3>
                  <p className="text-sm text-slate-600">Pay using credit or debit card</p>
                </div>
              </div>
            </div>
          </label>

          <label className="relative block">
            <input type="radio" name="payment" className="peer sr-only" />
            <div className="p-6 border-2 border-slate-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:bg-blue-50 hover:border-slate-300 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Cash Payment</h3>
                  <p className="text-sm text-slate-600">Pay at the hospital reception</p>
                </div>
              </div>
            </div>
          </label>
        </div>

        <div className="mt-8">
          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Phone Number (for M-Pesa)
            </label>
            <input
              type="tel"
              placeholder="+254 700 000 000"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Complete Payment - KES 5,100
          </button>
        </div>
      </div>
    </div>
  );
}
