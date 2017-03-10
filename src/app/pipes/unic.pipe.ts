import { Pipe, PipeTransform }  from '@angular/core';

@Pipe({name: 'unique'})

export class UniquePipe implements PipeTransform 
{
  transform(items: any, filterOn: any)
  {

    if (filterOn == false) 
    {
      return items;
    }


    if ((typeof filterOn !== undefined)  && Array.isArray(items))
    {
        
        let newItems: any [] = [];
        newItems[0] = items[0];
        let extractValueToCompare = function (item: any) 
        {
            if ((typeof item === 'object') && (typeof filterOn === 'string')) 
            {
                return item[filterOn];
            } 
            else 
            {
                 return item;
            }
          
        }

        for(let item of items) 
        {

            let isDuplicate: boolean = false;

            for (let i = 0; i < newItems.length; i++) 
            {
                if (extractValueToCompare(newItems[i]) === extractValueToCompare(item)) 
                {
                    isDuplicate = true;
                    break;
                }
            }

            if (!isDuplicate) 
            {
                newItems.push(item);
            }
            
        }

        return newItems; 
    }
    
  }
}
