import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'contain'})

export class ContainPipe implements PipeTransform 
{
  transform(items: any, filterOn: any, value: any)
  {

    if ((typeof value !== 'undefined') && (typeof filterOn !== 'undefined') && Array.isArray(items))
    {
 
        let newItems: any [] = [];

        for(let item of items) 
        {

            if ((typeof item === 'object') && (typeof filterOn === 'string') && (typeof value === 'string')) 
            {
                if(item[filterOn] === value)
                {
                    newItems.push(item);
                }
            }
        }

        return newItems;
    }
  }
}
