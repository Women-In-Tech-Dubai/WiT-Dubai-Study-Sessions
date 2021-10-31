/**
 * Suppose we have an array of jobs and each job has a single dependency (optional) which is another Job and we want to run each job dependency first then the job next:
 * 
for example: 

type Job = {
  job: string;
  dependency?: Job;
};

Examples:
Input: { job: 'A', dependency: { job: 'B', dependency: { job: 'C', dependency: { job: 'D' } } } }
Output: D => C => B => A

Input: { job: 'E', dependency: { job: 'F', dependency: { job: 'G' } }}
Output: G => F => E

Input: { job: 'H' }
Output: H

Input: { job: 'I', dependency: { job: 'J', dependency: { job: 'K' }} }
Output: K => J => I

// Pseudocode: 
jobDependencies = {
    A: B,
    B: C,
    C: 'D',
    D: null
}

jobswithnodep: []
sequence: [D, C, B, A]

    
    // for loop from 0 to number of properties in jobDependencies
    // if (value == null) // job with no dependency
    // add jobwithnodep to sequence
    // nullify parent job's dependency
    // set parent as jobwithnodep
 */

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

  function runJobs(job) {
    let currentJob = job;
    let jobDependencies = {};

    // construct hash map of jobDependencies in the format { <job>: <dependency> }
    while (currentJob.dependency) {
        jobDependencies[currentJob.job] = currentJob.dependency.job;
        currentJob = currentJob.dependency;
    }

    console.log('jobDependencies :>> ', jobDependencies);
    currentJob = currentJob.job;

    for(let i = 0; i <= Object.keys(jobDependencies).length; i++) {
         // Job with no dependency
        console.log(currentJob);
        currentJob = getKeyByValue(jobDependencies, currentJob);
    }
  }

runJobs({ job: 'A', dependency: { job: 'B', dependency: { job: 'C', dependency: { job: 'D' } } } });
runJobs({ job: 'E', dependency: { job: 'F', dependency: { job: 'G' } }});
runJobs({ job: 'H' });
runJobs({ job: 'I', dependency: { job: 'J', dependency: { job: 'K' }} });