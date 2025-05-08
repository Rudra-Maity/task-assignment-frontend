import { motion } from "framer-motion"


export default function Table({submissions}){
    return (
        <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-3">
        
          <motion.div
            className="bg-white rounded-lg shadow-md overflow-x-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <table className="w-full">
              <thead className=" bg-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">
                    
                  </th>
                  <th className="px-6 py-3 text-left text-xs  text-gray-800 uppercase tracking-wider font-bold">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs  text-gray-800 uppercase tracking-wider font-bold">
                    Gender
                  </th>
                  <th className="px-6 py-3 text-left text-xs  text-gray-800 uppercase tracking-wider font-bold">
                    Language
                  </th>
                  <th className="px-6 py-3 text-left text-xs  text-gray-800 uppercase tracking-wider font-bold">
                    Email
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {submissions.map((submission) => (
                  <motion.tr
                    key={submission.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input type="checkbox" className="rounded text-red-500" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {submission.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {submission.gender}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {submission.language}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {submission.email}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>
    )
}