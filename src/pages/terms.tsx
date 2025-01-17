import { Card } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <Card className="p-6">
        <div className="prose prose-sm max-w-none">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
          </p>

          <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
          <p className="mb-4">
            Permission is granted to temporarily download one copy of the materials (information or software) on AffiliStore's website for personal, non-commercial transitory viewing only.
          </p>

          <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
          <p className="mb-4">
            The materials on AffiliStore's website are provided on an 'as is' basis. AffiliStore makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>

          <h2 className="text-2xl font-semibold mb-4">4. Limitations</h2>
          <p className="mb-4">
            In no event shall AffiliStore or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on AffiliStore's website.
          </p>

          <h2 className="text-2xl font-semibold mb-4">5. Accuracy of Materials</h2>
          <p className="mb-4">
            The materials appearing on AffiliStore's website could include technical, typographical, or photographic errors. AffiliStore does not warrant that any of the materials on its website are accurate, complete or current.
          </p>

          <h2 className="text-2xl font-semibold mb-4">6. Links</h2>
          <p className="mb-4">
            AffiliStore has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by AffiliStore of the site.
          </p>

          <h2 className="text-2xl font-semibold mb-4">7. Modifications</h2>
          <p className="mb-4">
            AffiliStore may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
          </p>

          <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
          <p className="mb-4">
            These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>
        </div>
      </Card>
    </div>
  );
}