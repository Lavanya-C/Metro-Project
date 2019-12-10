function detai()
{
    var stat=[0,1.42,1.44,0.72,0.93,0.96,1.14,1.1,0.99,0.88,0.96,0.72,1.14,1.68,0.93,1.24,0.65,1.06,0.89,0.97,0.91,1.34,0.89,1.4,0.81,1.13,1.15,1.04,1.04,1.24,1.14,1.26,1.16,0.76,1.2,1.14,1.19,1.37,1.28,1.01];
    var cost=[0,0,10,15,15,18,20,22,25,28,30,30,35,35,38,48,42,45,45,50,50,52,55,58,60]
    var dist=0.0,flag=-1,temp,count=0,chg=0;
    var src=parseInt(document.getElementById("s1").value)
    var dest=parseInt(document.getElementById("s2").value)
    if(src>dest)
        {
            temp=src
            src=dest
            dest=temp
        }
    var srout=0,drout=0
    if(src>=0 && src<=13)
        srout=1
    else if(src>=14 && src<=23)
        srout=2
    else if(src>=24 && src<=30)
        srout=3
    else if(src>=31 && src<=39)
        srout=4
    if(dest>=0 && dest<=13)
        drout=1
    else if(dest>=14 && dest<=23)
        drout=2
    else if(dest>=24 && dest<=30)
        drout=3
    else if(dest>=31 && dest<=39)
        drout=4
    document.getElementById("p1").innerHTML="" 
/*    if(src==dest)
    {
       dist=0
       flag=1
    }             */
    if(src==13 && drout==3)
        for(x=24;x<=dest;x++,count++)
        {
            //document.getElementById("p1").innerHTML=(document.getElementById("p1").innerHTML)+"Dist="+dist+"+"+stat[x]+"="
            dist=dist+stat[x]
            //document.getElementById("p1").innerHTML=(document.getElementById("p1").innerHTML)+dist+"<br>"
            if(x==dest)
                {
                    flag=1
                }
        }
    else if(src==13 && drout==4)
        for(x=31;x<=dest;x++,count++)
        {
            //document.getElementById("p1").innerHTML=(document.getElementById("p1").innerHTML)+"Dist="+dist+"+"+stat[x]+"="
            dist=dist+stat[x]
            //document.getElementById("p1").innerHTML=(document.getElementById("p1").innerHTML)+dist+"<br>"
            if(x==dest)
                {
                    flag=1
                }
        }
    else if(srout==1 || srout==drout)
     {   
        for(x=src+1;x<=dest;x++,count++)
        {
            //document.getElementById("p1").innerHTML=(document.getElementById("p1").innerHTML)+"Dist="+dist+"+"+stat[x]+"="
            dist=dist+stat[x]
            //document.getElementById("p1").innerHTML=(document.getElementById("p1").innerHTML)+dist+"<br>"
            if(drout==3 && x==13)
                {
                    x=23
                    chg=1
                }
            if(drout==4 && x==13)
                {
                    x=30
                    chg=1
                }
            if(x==dest)
                {
                    flag=1
                    //break
                }
        }
    }
    else if(srout==2)
    {
        for(x=src;x>13;x--,count++)
        {
            //document.getElementById("p1").innerHTML=(document.getElementById("p1").innerHTML)+"Dist="+dist+"+"+stat[x]+"="
            dist=dist+stat[x]
            //document.getElementById("p1").innerHTML=(document.getElementById("p1").innerHTML)+dist+"<br>"
        }
        if(drout==3)
            for(x=24;x<=dest;x++,count++)
            {
                //document.getElementById("p1").innerHTML=(document.getElementById("p1").innerHTML)+"Dist="+dist+"+"+stat[x]+"="
                dist=dist+stat[x]
                //document.getElementById("p1").innerHTML=(document.getElementById("p1").innerHTML)+dist+"<br>"
                if(x==dest)
                {
                    flag=1
                    chg=1
                    //break
                }
            }
        if(drout==4)
            for(x=31;x<=dest;x++,count++)
            {
                //document.getElementById("p1").innerHTML=(document.getElementById("p1").innerHTML)+"Dist="+dist+"+"+stat[x]+"="
                dist=dist+stat[x]
                //document.getElementById("p1").innerHTML=(document.getElementById("p1").innerHTML)+dist+"<br>"
                if(x==dest)
                {
                    flag=1
                    chg=1
                    //break
                }
            }
    }
    else if(srout==3)
    {
        for(x=src;x>=24;x--,count++)
        {
            //document.getElementById("p1").innerHTML=(document.getElementById("p1").innerHTML)+"Dist="+dist+"+"+stat[x]+"="
            dist=dist+stat[x]
            //document.getElementById("p1").innerHTML=(document.getElementById("p1").innerHTML)+dist+"<br>"
        }
        for(x=31;x<=dest;x++,count++)
        {
            //document.getElementById("p1").innerHTML=(document.getElementById("p1").innerHTML)+"Dist="+dist+"+"+stat[x]+"="
            dist=dist+stat[x]
            //document.getElementById("p1").innerHTML=(document.getElementById("p1").innerHTML)+dist+"<br>"
            if(x==dest)
                {
                    flag=1
                }
        }
    }
/*    if(flag==-1)
    {
        dist=0
        for(x=dest+1;x<23;x++)
        {
            dist=dist+stat[x]
            if(x==src)
            {
                flag=1
                break
            }
        }
    }
*/
   
    dist=dist.toFixed(2)
    count++
    if(src==dest)
    {
        document.getElementById("p1").innerHTML="Source and destination stations cannot be same"
    }
    else if(flag!=-1)
        {
            document.getElementById("p1").innerHTML=/*(document.getElementById("p1").innerHTML)+*/"Distance is="+dist+"Km(s)"+"<br>"
            document.getElementById("p1").innerHTML=(document.getElementById("p1").innerHTML)+"Stations="+count+"<br>"
            document.getElementById("p1").innerHTML=(document.getElementById("p1").innerHTML)+"Cost for token="+cost[count]+"<br>"
            var ccost=(cost[count]*0.85).toFixed(2)
            document.getElementById("p1").innerHTML=(document.getElementById("p1").innerHTML)+"Cost in smartcard="+ccost+"<br>"
            document.getElementById("p1").innerHTML=(document.getElementById("p1").innerHTML)+"Changes="+chg+"<br>"
        }
    else
        document.getElementById("p1").innerHTML=/*(document.getElementById("p1").innerHTML)*/+"Not found"+"<br>"
}