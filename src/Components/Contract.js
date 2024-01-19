

import { Accordion } from 'flowbite-react';


export function Contract({contracts}) {
  return (
    
    <Accordion collapseAll>
      <Accordion.Panel>
        {contracts.map(contract=>{return (<>
        <Accordion.Title>{contract.projectName}</Accordion.Title>
        <Accordion.Content>
        <div className='flex flex-col gap-2'>
            <span className="mb-2 text-gray-500">
            <span className='font-bold'>Project Name: </span> {contract.projectName}
          </span>
          <span className='mb-2 text-gray-500'>
            <span className='font-bold '>Project Deadline: </span>
            {contract.projectDeadline}
          </span>
          <span className='mb-2 text-gray-500 flex gap-3'>
            <span className='font-bold'>
                Security Deposite: </span>
            {contract.securityDeposite}
          </span>
          <span className='mb-2 text-gray-500 flex gap-3'>
            <span className='font-bold'>
                Project Status: 
            </span>
            {contract.projectStatus}
          </span>
          

            </div>
        </Accordion.Content>
        </>)
        })}
      </Accordion.Panel>
     
    </Accordion>
  );
}
