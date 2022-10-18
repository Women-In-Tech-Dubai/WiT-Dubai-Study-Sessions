public class Solution {
    Dictionary<string, int> haspmap = new Dictionary<string, int>();

    public IList<string> FindRepeatedDnaSequences(string s)
    {
        List<string> result = new List<string>();
        for (int i = 0; i < s.Length - 9; i++)
        {
            string subStr = s.Substring(i, 10);
            if (haspmap.ContainsKey(subStr))
            {
                haspmap[subStr] = haspmap[subStr] +1 ;
                if (haspmap[subStr] == 2)
                    result.Add(subStr);
            }
            else
                haspmap.Add(subStr, 1);
        }
        return result;
    }
} 